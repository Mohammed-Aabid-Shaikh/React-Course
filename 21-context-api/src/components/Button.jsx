import React, { useContext } from 'react'
import { ThemeData } from '../context/ThemeContext'

const Button = () => {

    const [theme,setTheme] =  useContext(ThemeData)

    const changeTheme = ()=>{
        if(theme == 'light') {
            setTheme('dark')
        } else{
            setTheme('light')
        }
    }
  return (
    <div>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Button
