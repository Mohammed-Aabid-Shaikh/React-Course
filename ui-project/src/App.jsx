import React from 'react'
import Section1 from './components/Section1/section1'
import Section2 from './components/Section2/Section2'

const users = [
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: '',
    color:'DarkOrange',
    tag: 'Setisfied'
  },
  {
    img: 'https://images.unsplash.com/photo-1521898284481-a5ec348cb555?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: '',
    color:'Indigo',
    tag: 'Underserved'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661281292577-27c65307ac42?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: '',
    color:'SaddleBrown',
    tag: 'Underbanked'
  }
]
const App = () => {
  return (
    <div >
      <Section1 users={users} />
      {/* <Section2/> */}
    </div>
  )
}

export default App
