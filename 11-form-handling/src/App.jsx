import React from 'react'

const App = () => {

  const formHandler = (e) => {
    e.preventDefault()
    console.log("Button Clicked")
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        formHandler(e)
      }} className="login-form">
        <input type="text" placeholder='Enter Your Name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
