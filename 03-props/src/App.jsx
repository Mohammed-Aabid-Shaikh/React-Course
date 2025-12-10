import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
     <Card name='Mohammed Aabid' img='https://images.unsplash.com/photo-1754481249380-3b4ada5ebc67?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
     <Card name='Sakib Mansuri' img='https://plus.unsplash.com/premium_photo-1760583232675-44b82dcfc19f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
     <Card name='Ayan Mansuri' img='https://images.unsplash.com/photo-1760434875920-2b7a79ea163a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
    </div>
  )
}

export default App
