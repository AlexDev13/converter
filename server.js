// const http=require("http");
// const html=`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <!-- -------------------------styles -->
//     <link rel="stylesheet" href="./style/index.css">
//     <link rel="stylesheet" href="./style/header.css">
//     <title>Document</title>
// </head>
// <body>
//  <div id="header">
//      <img src="./images/ovclogo.png"id="img1">
   
//  </div>   
//  <div class="content">
//        <h4 id="convert"> CONVERT VIDEOS FROM YOUTUBE TO MP3 AND VARIOUS OTHER FORMATS</h4> 
//      <input type="text" placeholder="Paste link here https://www.youtube.com/watch?v=hBl5pV2xnQg">
//      <button>Start</button>
//  </div>
//     <!-- -------------------------scriptes -->
//     <script src="./components/header.js"></script>
// </body>
// </html>`;
// const css=`#header{
//     list-style: none;
//  width: 100%;
//  color: aliceblue;
//     background: black;
//  /* position: absolute; */
//  top: -10px;
//  text-align: center;
  
// }
// #img1{
//     margin-top: 2%;
//     width: 25vw;
//     margin-right: 65%;
// }
// .content{
//     margin-top: 10%;
// }
// .content input{
//     outline:none;
//     width: 40%;
//     height: 35px;
//     margin-left: 20%;
//     border-radius: 20px;
//     color: black;
//     font-size: 100%;
    
// }
// button{
//     border-radius: 20px;
//     height: 40px;
//     width: 80px;
//     color: bisque;
//     background-color: black;
//     outline:none;   
//     }
//     #convert{
//         text-align: center;
//     }`;
// var server=http.createServer((req,res)=>{
//     // console.log(req.url);
//     // console.log(req.method);
//     // console.log(req.headers);
//     switch(req.url){
//         case '/':
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.end(html);
//         case '/app.css':
//         res.writeHead(200,{'Content-Type':'text/css'})
//         res.end(css);
//         default:
//         res.writeHead(200,{'Content-Type':'text/plain'})
//     res.end("404");
//     }
    
// }).listen(3000, ()=> console.log("Server working on address 127.0.0.1:3000"));
// if(server=true){
//     console.log(200);
// }
// else{
//     response.status(500).send("500");
// }
var express = require('express');

// создаём Express-приложение
var app = express();

app.get('/', function(req, res) {
  res.sendfile('index.html');
});
app.get('/', function(req, res){
    response = {
    inputLink:req.query.inputLink    
    };
    

    console.log(response);
    
    
    res.end(JSON.stringify(response));
});


app.listen(8080);
console.log('Сервер стартовал!')