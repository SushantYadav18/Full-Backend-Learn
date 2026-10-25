import React from 'react'

const App = () => {

   async function getFetch() {
    try {
     const res = await fetch("http://localhost:8000/")

  let data= await res.json()
     console.log(data)   

  }
  catch(error){
  console.log(error)
}
}






  return (
    <div>
      <h1 className='text-4xl text-center m-20 text-shadow-black'>Hello guys</h1>
      <button className="border-2 border-black" onClick={()=>getFetch()} >send</button>
    </div>
  )
}

export default App
