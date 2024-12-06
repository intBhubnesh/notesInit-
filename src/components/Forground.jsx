import React, { useState } from 'react';
import { NavBar } from './NavBar';
import { CategoryBar } from './CategoryBar';
import { PasteForm } from './PasteForm';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../redux/CategorySlice';
import { nanoid } from '@reduxjs/toolkit';
import { createPaste } from '../redux/pasteSlice';

export const Forground = () => {
  const [title, setTitle] = useState('Title');
  const [text, setText] = useState('');
  const [pasteCategoryList, setPasteCategoryList] = useState([]);
  const categoryList = useSelector((state) => state.Category.categoryList);
  const pasteList = useSelector(state => state.Paste.pasteList)
  const dispatch = useDispatch();
    console.log(pasteList);
    
  // Function to handle paste creation
  function handelCreatePaste() {
    if (title && text) {
      const newPaste = {
        id: nanoid(),
        title,
        description: text,
        category: pasteCategoryList,
      };
      dispatch(createPaste(newPaste));
      setTitle('Title');  // Reset title after creation
      setText('');        // Reset text after creation
      setPasteCategoryList([]); // Clear selected categories
    }
  }

  // Function to validate category name
  function validCategory(name) {
    if (!name) {
      alert("Category name cannot be empty!");
      return false;
    }
    if (categoryList.find((cat) => cat.name === name)) {
      alert("Category already exists!");
      return false;
    }
    return true;
  }

  // Function to handle category creation
  function handelCreateCategory(name) {
    if (validCategory(name)) {
      const newCategory = {
        id: nanoid(),
        name: name,
        color: '#E8403B',
      };
      // Add the category to the global state and pasteCategoryList
      dispatch(addCategory(newCategory));
      setPasteCategoryList((prev) => [...prev, newCategory]);
    }
  }

  return (
    <div className='absolute px-8 inset-0 z-0 m-4 bg-black/40 backdrop-blur-xl rounded-[32px] outline-2 outline-zinc-400/30 outline'>
      <NavBar createPaste={handelCreatePaste} />
      <CategoryBar
        pasteCategoryList={pasteCategoryList}
        setPasteCategoryList={setPasteCategoryList}
        handelCreateCategory={handelCreateCategory}
      />
      <PasteForm title={title} setTitle={setTitle} text={text} setText={setText} />
    </div>
  );
};
