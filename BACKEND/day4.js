//create one promises that will display user name and password using resolve and if data will be rejected it display error
 const promiseOne=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let err=false;
        if(!err){
            resolve("user:CSE21,password:123");
        }else{
            reject("ERROR...:DATA FAIL");
        }
    },2000)
}).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})

//async/await
console.log("This is async/await");
async function test(){
    console.log("1");
    console.log("2");
    await console.log("3");
    console.log("4");
}
test();