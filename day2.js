//Synchronous and Asynchronous programming
//synchronous programmming : code is executed line by line
console.log("javascript");
function hello(){
    console.log("hello,world!");
}
hello();
console.log("This is synchronous programming");

//Asynchronous programming:code is executed line by line ,but some
const Hello=()=>{
    setTimeout(()=>{
        console.log("hello,world!");
    },2000);
}
Hello();
console.log("This is Asynchronous Programming");

//callback,promises,async/await
function add(n1,n2,callback){
    console.log(n1+n2);
    callback();
}
let a=10;
let b=20;
add(a,b,sayHi);
function sayHi(){
    console.log("This is callback");
}

//create a function display(callback) that print "Welcome to Abes",then call callback which print learning"FSD in cs"
function display(callback){
    console.log("Welcome to Abes");
    callback();
}
display(learn);
function learn(){
    console.log("FSD in cs");
}

