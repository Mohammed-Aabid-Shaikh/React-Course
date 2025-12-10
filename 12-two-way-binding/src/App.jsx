import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('')

   const formHandler = (e) => {
    e.preventDefault()
    console.log("Form Submitted by", title)
    settitle('')
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        formHandler(e)
      }} className="login-form">
        <input type="text" placeholder='Enter Your Name' value={title} onChange={(e) =>{
          settitle(e.target.value)
        }} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
