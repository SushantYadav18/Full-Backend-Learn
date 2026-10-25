import express from "express"
import cors from "cors"

let app = express()
app.use(cors())
let port = 8000;



app.get("/", (req,res)=>{

    res.json({name:"sushant", age:23})
})

app.listen(port,()=>{
    console.log("Server Running at port 8000...")
})