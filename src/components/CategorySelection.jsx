import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SelectCategoryTag } from './SelectCategoryTag'
import {selectCategory} from '../redux/categorySlice'
export const   CategorySelection = ({setSelectedTag}) => {
    const categoryList = useSelector(state => state.Category.categoryList)
    const dispatch = useDispatch()

    useEffect(() => {
        const filterCategoryList = categoryList.filter(cat => cat.isSelected).map(cat => cat.name);
        setSelectedTag(filterCategoryList);
      }, [categoryList, setSelectedTag]);

    function handelSelectedCategory(id) {
        dispatch(selectCategory(id))
    }

  return (
    <div className='flex flex-row items-center justify-center w-3/5 mx-auto mt-2'>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M23 24L17.2258 18.2258M17.2258 18.2258C18.7886 16.663 19.6666 14.5434 19.6666 12.3333C19.6666 10.1232 18.7886 8.00356 17.2258 6.44076C15.663 4.87797 13.5434 4 11.3333 4C9.12316 4 7.00356 4.87797 5.44076 6.44076C3.87797 8.00356 3 10.1232 3 12.3333C3 14.5434 3.87797 16.663 5.44076 18.2258C7.00356 19.7886 9.12316 20.6666 11.3333 20.6666C13.5434 20.6666 15.663 19.7886 17.2258 18.2258Z" stroke="#D7D7D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
        <div className='flex h-full gap-4 mx-8 overflow-x-auto rounded-lg max-w-4/5 custom-scrollbar'>
{            categoryList.map(({id, name, isSelected }) => (
                < SelectCategoryTag key={id} lable={name} isSelected={isSelected} onClick={() => handelSelectedCategory(id)}/>
            ))}
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M4.375 7.875H23.625M4.375 14H23.625M14 20.125H23.625" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
    </div>
  )
}
