import express from "express"

const app = express();
const port = 8001;

app.get("/",(req,res)=>{

    res.send("hello guys I wanna create Server using express.js . Thank You So much!! ")

})

app.listen(port ,()=>{
   console.log(`Server is running  at ${port}`);
})
   































// import http from "http"



// const port = 8000;
// const server = http.createServer((req, res)=>{
    
//     if (req.url == "/"){
//         res.end("Welcome to my Dashboard")
//     }
//    else if(req.url == "/about"){
//     res.end("Welcome to  About page")
//    }

//    else{
//     res.end("404 Not Found")
//    }

// })

// server.listen(port, ()=>{
     
//     console.log("Server is running at port 8000")
// })
