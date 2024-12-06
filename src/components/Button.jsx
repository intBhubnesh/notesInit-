import React from 'react'

export const Button = ({lable="Paste"}) => {
  return (
    <div className='h-[44px] rounded-xl w-[90px] bg-[#E8403B] inline-flex items-center justify-center text-xl font-light shadow-lg text-white'>{lable}</div>
  )
}
