import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const App = () => {

  // Calling Api using fetch

  //  const getData = async ()=>{
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //   const data = await response.json()
  //   console.log(data);
  // }

  const [data, setdata] = useState([])
  const getData = async ()=>{
    const res = await axios.get('https://picsum.photos/v2/list')
    console.log(res.data)
    setdata(res.data)
  }
  return (
    <div>
      <h1>Hi, I am Aabid</h1> 
      {/* <button onClick={getData}>Click here</button> */}
      <button onClick={getData}>Click here</button>
      <div>
        {data.map(function(elem,idx){

          return <h3 >{idx}, {elem.author}</h3>
        })}
      </div>
    </div>
  )
}

export default App
