import express from "express";

const app = express();
const port = 8001;

app.get("/html" ,(req, res)=>{
   res.send("<h1>Hello this html used in server direct<h1>")
})


app.listen(port, () => {
  console.log(`Server is running  at ${port}`);
});









































// let users =[
    
//   {
//     "id": 1,
//     "name": "Sushant Yadav",
//     "age": 23,
//     "department": "IT",
//     "position": "Frontend Developer",
//     "salary": 35000,
//     "email": "sushant@example.com"
//   },
//   {
//     "id": 2,
//     "name": "Rahul Sharma",
//     "age": 25,
//     "department": "HR",
//     "position": "HR Manager",
//     "salary": 50000,
//     "email": "rahul@example.com"
//   },
//   {
//     "id": 3,
//     "name": "Priya Thapa",
//     "age": 24,
//     "department": "Finance",
//     "position": "Accountant",
//     "salary": 40000,
//     "email": "priya@example.com"
//   },
//   {
//     "id": 4,
//     "name": "Amit Singh",
//     "age": 28,
//     "department": "IT",
//     "position": "Backend Developer",
//     "salary": 55000,
//     "email": "amit@example.com"
//   },
//   {
//     "id": 5,
//     "name": "Anita Karki",
//     "age": 26,
//     "department": "Marketing",
//     "position": "Marketing Executive",
//     "salary": 38000,
//     "email": "anita@example.com"
//   }

// ]
 
// app.get("/user",(req,res)=>{      //http://localhost:8001/user
//      res.json(users)
// })


// // req.params.id

// app.get("/user/:id",(req,res)=>{                  //http://localhost:8001/user/3
//  let id = req.params.id
// let existingUser = users.find((user)=>(user.id == id))
 
// if(!existingUser){
//     res.send("404 not found check your id")
// }
//     res.json(existingUser)
// })


// //req.query

// app.get("/search", (req,res)=>{      //http://localhost:8001/search?name=sushant&age=23
//     let query =req.query
//     res.json(query)
// })

// app.use(express.json()); // Middleware: parse incoming JSON request bodies

// app.get("/", (req, res) => {
//   res.json({
//     name: "sushant",
//     class: "12",
//   });
// });


// app.post("/", (req, res) => {
//   let body = req.body;
//   console.log(body);
//   res.send("this is Post http request");
// });






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
