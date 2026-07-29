//understand the concept of fetch in console 
async function test(){
console.log("This is asynchronous function and we want to use fetch() in console");
const response= await fetch("./student.json");
console.log(response.status)
const stud=await response.json();
return stud;
console.log("Final data fetch ");
}
test().then((res)=>{
   console.log(res);
}).catch((err)=>{
    console.log("err");
})