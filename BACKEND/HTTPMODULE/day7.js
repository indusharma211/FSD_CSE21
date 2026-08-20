//create your own server using http module
import http from 'http';
//const http=require('http');
const server=http.createServer((req,res)=>{
  res.write('hello world');
  res.end();
})
server.listen(5000,()=>{
    console.log("server is running on port 5000");
})