import React, { useState } from 'react'
import { Button } from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';
import { NavLink } from 'react-router-dom';




export const NavBar = ({createPaste}) => {
    const icons = {
        lightIcon: <svg width="24" height="25" viewBox="0 0 24 25" fill='none'   xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1.69995V4.39995M19.6368 4.86315L17.7276 6.77235M22.8 12.5H20.1M19.6368 20.1368L17.7276 18.2276M12 20.6V23.3M6.27235 18.2276L4.36315 20.1368M3.89995 12.5H1.19995M6.27235 6.77235L4.36315 4.86315M16.5 12.5C16.5 13.6934 16.0258 14.838 15.1819 15.6819C14.338 16.5258 13.1934 17 12 17C10.8065 17 9.66188 16.5258 8.81797 15.6819C7.97406 14.838 7.49995 13.6934 7.49995 12.5C7.49995 11.3065 7.97406 10.1619 8.81797 9.31797C9.66188 8.47406 10.8065 7.99995 12 7.99995C13.1934 7.99995 14.338 8.47406 15.1819 9.31797C16.0258 10.1619 16.5 11.3065 16.5 12.5Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>,
        darkIcon : <svg width="25" height="24" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.8023 18.1024C25.3758 18.6969 23.8454 19.002 22.2999 19C15.8379 19 10.5999 13.762 10.5999 7.30001C10.5999 5.70401 10.9191 4.18361 11.4975 2.79761C9.36569 3.68694 7.54469 5.18723 6.26388 7.10951C4.98307 9.0318 4.29973 11.2901 4.29993 13.6C4.29993 20.062 9.53793 25.3 15.9999 25.3C18.3098 25.3002 20.5681 24.6169 22.4904 23.3361C24.4127 22.0552 25.913 20.2342 26.8023 18.1024Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>,
        createPaste : <svg width="24" height="21" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 9.7001V16.9001M16.6 13.3001H9.40005M14.272 4.6721L11.728 2.1281C11.5609 1.96076 11.3625 1.828 11.144 1.7374C10.9255 1.64681 10.6914 1.60015 10.4548 1.6001H4.00005C3.28396 1.6001 2.59721 1.88456 2.09086 2.39091C1.58451 2.89726 1.30005 3.58401 1.30005 4.3001V18.7001C1.30005 19.4162 1.58451 20.1029 2.09086 20.6093C2.59721 21.1156 3.28396 21.4001 4.00005 21.4001H22C22.7161 21.4001 23.4029 21.1156 23.9092 20.6093C24.4156 20.1029 24.7 19.4162 24.7 18.7001V7.9001C24.7 7.18401 24.4156 6.49726 23.9092 5.99091C23.4029 5.48456 22.7161 5.2001 22 5.2001H15.5452C15.068 5.19968 14.6093 5.00976 14.272 4.6721Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>,
        pasteBoxIcon : <svg width="25" height="21" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.80005 13.3001H6.43205C6.93341 13.3002 7.42483 13.4399 7.85126 13.7036C8.27769 13.9673 8.62229 14.3444 8.84645 14.7929L9.15365 15.4073C9.3779 15.8559 9.72269 16.2332 10.1494 16.4969C10.576 16.7606 11.0677 16.9002 11.5692 16.9001H15.4308C15.9324 16.9002 16.4241 16.7606 16.8507 16.4969C17.2774 16.2332 17.6222 15.8559 17.8464 15.4073L18.1536 14.7929C18.3779 14.3443 18.7227 13.967 19.1494 13.7033C19.576 13.4396 20.0677 13.3 20.5692 13.3001H25.2M1.80005 13.7057V18.7001C1.80005 19.4162 2.08451 20.1029 2.59086 20.6093C3.09721 21.1156 3.78396 21.4001 4.50005 21.4001H22.5C23.2161 21.4001 23.9029 21.1156 24.4092 20.6093C24.9156 20.1029 25.2 19.4162 25.2 18.7001V13.7057C25.2 13.4369 25.1592 13.1693 25.08 12.9125L22.188 3.5057C22.0182 2.95399 21.676 2.47124 21.2117 2.12828C20.7473 1.78532 20.1853 1.6002 19.608 1.6001H7.39325C6.81599 1.6002 6.25396 1.78532 5.78962 2.12828C5.32529 2.47124 4.98309 2.95399 4.81325 3.5057L1.92005 12.9125C1.84077 13.1694 1.80033 13.4368 1.80005 13.7057Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    }

    const [isPasteBoxOpen, setIsPasteBoxOpen] = useState(false)

    const dispatcher = useDispatch()
    const theme = useSelector(state => state.Theme.mode)


    const active = ' w-[52px] h-[35px]  rounded-xl bg-black/60 text-[#E8403B] shadow-md'
  return (
    <div className='flex flex-row items-center justify-between w-full mt-4  border-b-[2px] border-white/10 pb-6 '>
        <h1 className='text-[38px] font-bold text-white'>Paste.</h1>
        <div className='flex flex-row gap-8'>
            {/* routing the pages  */}
            <div className='inline-flex items-center justify-between gap-4 '>
                <NavLink
                to='/pasteList'
                className={({ isActive }) =>
                    `inline-flex items-center justify-center
                    ${ isActive ? active : 'text-white'}`}
                onClick={() => setIsPasteBoxOpen(true)}>
                    {icons.pasteBoxIcon}
                </NavLink>
                <NavLink
                to='/'
                className={({ isActive }) =>
                    `inline-flex items-center justify-center
                    ${ isActive ? active : 'text-white'}`}
                onClick={() => setIsPasteBoxOpen(false)} >
                    {icons.createPaste}
                </NavLink>
            </div>
            <div className='w-[2px] h-8  rounded-full bg-white/10'>
            </div>
            {/* theme toggle  */}
            <div className='inline-flex items-center justify-between gap-4 '>
            <div className={` inline-flex items-center justify-center  ${theme === 'light' ?  active : "text-white"}`}
            onClick={() => dispatcher(toggleTheme('light'))}>
            {icons.lightIcon}
</div>

                <div
                className={`inline-flex items-center justify-center  ${theme === 'dark' ?  active : "text-white"}`}
                onClick={() => dispatcher(toggleTheme('dark'))}>
                    {icons.darkIcon}
                </div>
            </div>
        </div>
        < Button onClick={createPaste}/>
    </div>
  )
}
