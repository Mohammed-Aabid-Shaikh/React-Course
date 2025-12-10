import React from 'react'

const App = () => {

  localStorage.setItem('User','Mohammed Aabid Shaikh')
  localStorage.setItem('Age','21')
  const user = localStorage.getItem('User')
  const age = localStorage.getItem('Age')

  localStorage.removeItem('User')  // for Remove item
  localStorage.removeItem('Age')

  const arrUser = {
    Name: 'Aabid',
    Age: '21',
    City: 'Ahmedabad'
  }

  localStorage.setItem('ArrUser',JSON.stringify(arrUser))
  const userList = JSON.parse(localStorage.getItem('ArrUser'))
  console.log(userList)
  return (
    <div>
      <h1>User Name: {user}</h1>
      <h1>Age: {age}</h1>
      {/* <h2>Users List: {userList}</h2> */}
    </div>
  )
}

export default App
