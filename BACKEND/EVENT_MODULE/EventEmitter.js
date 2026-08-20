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

class MyEmitter extends EventEmitter{}
const event =new MyEmitter();
event.on("greet",(msg)=>{
    console.log(`hello ${msg}`);//Template literals: `${var} 
})
event.on("exit")
event.emit("greet","CSE 21 ,this is Fsd class");
event.emit("exit")

//2.  Simulate DOM- like event handling in Node.js using events
//Button: click and mouseover events
class Button extends EventEmitter{
    click(){
        console.log("/n call button click event");
        this.emit("click");
    }

    mouseover(){
        console.log("/n call button mouseover event");
        this.emit("mouseover");
    }


}
const event=New Button();
event.on("click",())

//visualize the  event loop using setTimeout ,setImmediate and process.nextTick

