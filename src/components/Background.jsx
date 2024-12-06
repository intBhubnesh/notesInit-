import React from 'react'
import  Dark  from '../assets/DarkBg.jpeg'
import  Light  from '../assets/LightBg.jpeg'
import { useSelector } from 'react-redux'

export const Background = () => {
    const theme = useSelector(state => state.Theme.mode)
    const background = theme === 'dark' ? Dark : Light
  return (
    <div className='w-full h-screen bg-red-300 bg-no-repeat bg-cover' style={{
        backgroundImage : `url(${background})`
    }}></div>
  )
}
