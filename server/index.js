// const http = require("http");
const express = require("express");
// const fs = require("fs");
// const url = require("url");


const app = express();

app.get("/",(req,res)=>{
return res.send("Hello From Home page")
});
app.get("/about",(req,res)=>{
    return res.send(`Hello Fom About Page`);
    });
app.listen(8000,()=> console.log("server startded"));
//   const myServer = http.createServer(app);
//  myServer.listen(8000, () => console.log("Server Started"));
