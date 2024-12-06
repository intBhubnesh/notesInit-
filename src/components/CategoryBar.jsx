import React, { useState } from 'react';
import { CategoryTag } from './CategoryTag';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../redux/CategorySlice';
import { nanoid } from '@reduxjs/toolkit';

export const CategoryBar = () => {
    const [input, setInput] = useState('lable');
    const [reqAddCategory, setReqAddCategory] = useState(false);
    const categoryList = useSelector((state) => state.Category.categoryList);
    console.log(categoryList);

    const dispatch = useDispatch()

    const getInputWidth = (text) => {
        const tempElement = document.createElement('span');
        tempElement.style.visibility = 'hidden';
        tempElement.style.position = 'absolute';
        tempElement.style.whiteSpace = 'nowrap';
        tempElement.style.font = 'inherit'; // Ensures the same font styles are applied
        tempElement.innerText = text || 'placeholder';
        document.body.appendChild(tempElement);
        const width = tempElement.offsetWidth;
        document.body.removeChild(tempElement);
        return Math.max(width, 24); // Minimum width of 48px (w-12 in Tailwind)
    };

    const inputStyle = {
        width: `${getInputWidth(input)}px`,
    };

    function saveCategory() {
        if (validCategory(input)) {
            dispatch(addCategory({id:nanoid(), name:input, color:'#E8403B'  }))
            setReqAddCategory(false)
            setInput('lable')
        }
    }
    function validCategory(category) {
        if (category && categoryList.find(cat => cat.name === category)) {
            alert("record already exist !")
            return false;

        } else {
            if(category)
                return true
        }
}
return (
    <div className="flex flex-row items-center justify-start gap-5 border-t-[2px] border-white/10 py-5 mt-6">
        <div className="flex flex-row gap-5">
            {categoryList.map(({ id, name, color }) => (
                <CategoryTag key={id} lable={name} color={color} />
            ))}
        </div>
        {reqAddCategory && (
            <div className="inline-flex flex-row items-center justify-between h-6 gap-2 px-3 py-4 rounded-lg w-fit bg-black/50">
                <input
                    type="text"
                    name="addCategory"
                    id="addCategory"
                    className="text-sm font-medium text-white/50"
                    placeholder={input}
                    onChange={(e) => setInput(e.target.value)}
                    style={inputStyle}
                    onKeyDown={e => e.key === 'Enter' && saveCategory() }
                />
            </div>
        )}
        <div
            className="inline-flex flex-row items-center justify-between h-6 px-5 py-4 rounded-lg bg-[#E8403B]"
            onClick={() => setReqAddCategory(true)}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 29 28"
                fill="none"
            >
                <path
                    d="M14.5 5.25V22.75M23.25 14H5.75"
                    stroke="#D7D7D7"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    </div>
);
};
