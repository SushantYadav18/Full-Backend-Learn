import http from "http"



const port = 8000;
const server = http.createServer((req, res)=>{
    
    if (req.url == "/"){
        res.end("Welcome to my Dashboard")
    }
   else if(req.url == "/about"){
    res.end("Welcome to  About page")
   }

   else{
    res.end("404 Not Found")
   }

})

server.listen(port, ()=>{
     
    console.log("Server is running at port 8000")
})
