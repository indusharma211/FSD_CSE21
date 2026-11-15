//Assignment 2.Create an express.js REST API that contains 100 products

const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

// Array containing 100 products
const products = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: (i + 1) * 100,
    category: ['Electronics', 'Clothing', 'Books', 'Furniture', 'Accessories'][i % 5],
    inStock: true
}));

// Home Route
app.get('/', (req, res) => {
    res.send('Welcome to Product REST API');
});

// GET: Fetch all products
app.get('/products', (req, res) => {
    res.json(products);
});

// GET: Fetch a single product by ID
app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: 'Product not found'
        });
    }

    res.json(product);
});

// POST: Add a new product
app.post('/products', (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        inStock: req.body.inStock ?? true
    };

    products.push(newProduct);

    res.status(201).json({
        message: 'Product added successfully',
        product: newProduct
    });
});

// PUT: Update a product
app.put('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: 'Product not found'
        });
    }

    product.name = req.body.name ?? product.name;
    product.price = req.body.price ?? product.price;
    product.category = req.body.category ?? product.category;
    product.inStock = req.body.inStock ?? product.inStock;

    res.json({
        message: 'Product updated successfully',
        product: product
    });
});

// DELETE: Remove a product
app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: 'Product not found'
        });
    }

    const deletedProduct = products.splice(index, 1);

    res.json({
        message: 'Product deleted successfully',
        product: deletedProduct[0]
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});