import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeData } from '../context/ThemeContext'

const Navbar = () => {
  const [theme] = useContext(ThemeData)
  return (
    <div className={theme}>
      <h2>Aabid</h2>
      <Nav2 />
    </div>
  )
}

export default Navbar
