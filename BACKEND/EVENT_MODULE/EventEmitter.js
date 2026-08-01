//EventEmitter is class 
//emit("event parameter"):to trigger/create/fire a function
//and on ("event emit parameter,callback func"):is used to add a callback function that's going to be executed when the event is triggered
const EventEmitter= require("events");
const event=new EventEmitter();
event.on("greet",()=>{
   console.log("This is event emitter");
    })
    
event.emit("greet");


//1.  create a custom eventemitter that triggers "greet" or "exit"
//2.  Simulate DOM- like event handling in Node.js using events
class MyEmitter extends EventEmitter{}
const event =new MyEmitter();
event.on("greet",(msg)=>{
    console.log(`hello ${msg}`);//Template literals: `${var} 
})
event.emit("greet","CSE 21 ,this is Fsd class");

