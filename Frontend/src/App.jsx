import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [name, setName] = useState(null);
  const [city, setCity] = useState(null);
  const [age, setAge] = useState(null);

  async function getFetch() {
    //  axios.get("http://localhost:8000/")
    //  .then((e)=>{
    //   console.log(e.data)
    //  })
    // .catch((e)=>{
    //   console.log(e)
    // })

    axios
      .post("http://localhost:8000/", {
        name,
        city,
        age,
      })
      .then((e) => {
        console.log(e);
      })
      .catch((e) => {
        console.log(e);
      });
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
    <div >
      <div className="flex flex-3 bottom-2 border-amber-200">
      <input
        type="text"
        placeholder="Enter Your Name: "
        value={name}
        onChange={(e) => setName(e.target.value)}
      />  <br />

      <input
        type="text"
        placeholder="City Name: "
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Your age: "
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button className="bg-gray-500" onClick={()=>getFetch()}>Send</button>

      {/* <button className="border-2 border-black" onClick={getFetch} >send</button> */}
    </div>
    </div>
  );
};

export default App;
