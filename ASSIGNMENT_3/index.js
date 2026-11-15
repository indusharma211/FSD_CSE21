//Assignment 3.create portfolio using html and css and display in your server using express
const express = require('express');

const app = express();
const PORT = 3000;

// Serve HTML and CSS files
app.use(express.static(__dirname));

// Start the server
app.listen(PORT, () => {
    console.log(`Portfolio is running at http://localhost:${PORT}`);
});
