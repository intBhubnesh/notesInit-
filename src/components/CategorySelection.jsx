import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SelectCategoryTag } from './SelectCategoryTag'
import {resetCategory, selectCategory} from '../redux/categorySlice'
import { resetPaste } from '../redux/pasteSlice'
export const   CategorySelection = ({isSearchOpen, handelSearch,setSelectedTag,search, setSearch}) => {
    const categoryList = useSelector(state => state.Category.categoryList)
    const dispatch = useDispatch()
    useEffect(() => {
        const filterCategoryList = categoryList.filter(cat => cat.isSelected).map(cat => cat.name);
        setSelectedTag(filterCategoryList);
      }, [categoryList, setSelectedTag]);

    function handelSelectedCategory(id) {
        dispatch(selectCategory(id))
    }

    function handelResetPaste(){
        const confirm = window.confirm("Do u want to delete all the paste ?")

        if(confirm){
            dispatch(resetPaste())
            dispatch(resetCategory())
        }
    }
  return (
    <div className='flex flex-row items-center justify-center w-3/5 mx-auto mt-2'>
        <div
        className='inline-flex items-center justify-center text-[#D7D7D7] hover:text-[#F65D46]/80 hover:cursor-pointer'
        onClick={handelSearch}>
        {/* search  */}
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"  stroke="currentColor">
  <path d="M23 24L17.2258 18.2258M17.2258 18.2258C18.7886 16.663 19.6666 14.5434 19.6666 12.3333C19.6666 10.1232 18.7886 8.00356 17.2258 6.44076C15.663 4.87797 13.5434 4 11.3333 4C9.12316 4 7.00356 4.87797 5.44076 6.44076C3.87797 8.00356 3 10.1232 3 12.3333C3 14.5434 3.87797 16.663 5.44076 18.2258C7.00356 19.7886 9.12316 20.6666 11.3333 20.6666C13.5434 20.6666 15.663 19.7886 17.2258 18.2258Z"  stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
        {isSearchOpen && (
            <div className='inline-flex h-8 px-2 text-[13px] rounded-[10px] focus:outline-blue-400 -mr-4 ml-4 outline outline-2 outline-black/30 backdrop-blur-xl bg-white/5 text-white/60 font-medium '>
            <input  className='placeholder-white/40 ' type="text" placeholder='Search the paste' value={search} onChange={e => setSearch(e.target.value)} />
            </div>
        )}
        <div className='flex h-full gap-4 mx-8 overflow-x-auto rounded-lg max-w-4/5 custom-scrollbar'>
{            categoryList.map(({id, name, isSelected }) => (
                <SelectCategoryTag key={id} lable={name} isSelected={isSelected} onClick={() => handelSelectedCategory(id)}/>
            ))}
        </div>
        <div
        className='text-[#D7D7D7] hover:text-black/50 hover:cursor-pointer'
        onClick={handelResetPaste}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7 hover:fill-[#F65D46]">
  <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
</svg>
        </div>
    </div>
  )
}
