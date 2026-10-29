import express from "express"
import cors from "cors"

let app = express()

 app.use(cors())                          //this give to allow everyone  (third part middleware) to access the backend server

// app.use(cors({
//     "origin":"http://localhost:5173"  //this give to allow specific port that will defined 
// }

// ))
let port = 8000;
app.use(express.json())            //this is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
 

// let password ="sushant12"

// app.use((req,res,next)=>{
//     if(req.body.pass!=password){
//         res.status(400).send("password will be not matched check againa")
//     }
//     next()
// })
app.get("/about", (req,res)=>{
    res.send("About Page")
})
                    


app.get("/", (req,res)=>{

  console.log(req.get("user-agent"))         //req.get:which is getting specific header , req.headers :it's getting all headers
  res.set("username", "sushant")            //set headers          
  res.removeHeader("connection")                   //remove header
 res.status(200).json({name:"sushant", age:23})    //Status defined
    
})


//  app.post("/", (req,res)=>{
//     console.log(req.body)                              
//     res.send({success:true})
//  })


app.listen(port,()=>{
    console.log("Server Running at port 8000...")
})