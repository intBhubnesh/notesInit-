import React from 'react'

export const Button = ({lable="Paste", onClick}) => {
  return (
    <div
    className='h-[40px] rounded-xl w-[80px] bg-[#E8403B] inline-flex items-center justify-center text-lg font-light shadow-lg text-white'
    onClick={onClick}
    >{lable}</div>
  )
}
