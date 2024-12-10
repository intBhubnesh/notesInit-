

import React from 'react'
import { NavBar } from './NavBar'
import { ViewPaste } from "./ViewPaste";
import { useNavigate } from 'react-router-dom';

export const ViewPasteForgorund = () => {
    const navigate = useNavigate()
    function closeViewPaste(){
        navigate(`/PasteBox`)
    }
  return (

    <div className='absolute px-8 inset-0 z-0 m-4 bg-black/40 backdrop-blur-xl rounded-[32px] outline-2 outline-zinc-400/30 outline'>
    <NavBar onClick={closeViewPaste}  lable="Close"/>
    < ViewPaste />
    </div>
  )
}
