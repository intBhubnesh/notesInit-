import React from 'react'
import { NavBar } from './NavBar'
import { CategoryBar } from './CategoryBar'
import { PasteForm } from './PasteForm'

export const Forground = () => {
  return (
    <div className='absolute px-8  inset-0 z-0 m-8 bg-black/40 backdrop-blur-xl rounded-[32px] outline-2 outline-zinc-400/30 outline'>
        < NavBar />
        < CategoryBar />
        < PasteForm />
    </div>
  )
}
