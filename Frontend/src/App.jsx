import React from 'react'
import axios from "axios"

const App = () => {

   async function getFetch() {

 axios.get("http://localhost:8000/")
 .then((e)=>{
  console.log(e.data)
 })
.catch((e)=>{
  console.log(e)
})



   }




//     try {
//      const res = await fetch("http://localhost:8000/")

//   let data= await res.json()
//      console.log(data)   

//   }
//   catch(error){
//   console.log(error)
// }







  return (
    <div>
      <h1 className='text-4xl text-center m-20 text-shadow-black'>Hello guys</h1>
      <button className="border-2 border-black" onClick={getFetch} >send</button>
    </div>
  )
}

export default App
