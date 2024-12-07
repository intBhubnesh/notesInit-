import React from 'react'

export const SelectCategoryTag = ({lable, isSelected=true, onClick}) => {

return (
    <div
    className={`inline-flex flex-row items-center justify-between h-6 gap-2 px-3 py-4 rounded-lg  ${ isSelected === true ? 'bg-black/50 group' : ''}`}
    onClick={onClick}>
        <div className='inline-flex items-center justify-center '>
            <div className={`${isSelected === true ? 'bg-[#F65D46]' : 'bg-white/70'} rounded-full size-3`}></div>
        </div>
        <h1 className='text-sm font-medium text-white/50'>{lable}</h1>
    </div>
)
}
