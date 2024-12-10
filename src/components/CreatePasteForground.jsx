import React, {  useEffect, useState } from 'react';
import { NavBar } from './NavBar';
import { CategoryBar } from './CategoryBar';
import { PasteForm } from './PasteForm';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../redux/CategorySlice';
import { nanoid } from '@reduxjs/toolkit';
import { createPaste, updatePaste } from '../redux/pasteSlice';
import {  useNavigate, useParams, useSearchParams } from 'react-router-dom';

export const CreatePasteForground = () => {

    const dispatch = useDispatch();
    const [searchParam] = useSearchParams()
    const isEdit = searchParam.get('edit')  ? true : false
    const [lable] = useState(isEdit ? 'Edit' : 'Create')
    const pasteId = useParams('id')
    const paste = useSelector(state => state.Paste.pasteList.find(paste => paste.id === pasteId.id))
    const [pasteCategoryList, setPasteCategoryList] = useState(paste ? paste.category :[]);
    const [title, setTitle] = useState(paste ? paste.title : '');
    const [text, setText] = useState(paste ? paste.description : '');
    const navigate = useNavigate()
    console.log(pasteId.id," ", isEdit);


  // Function to handle paste creation
  function handelCreatePaste() {
      const time = new Date()
      if (title && text) {
          const newPaste = {
              id: nanoid(),
              title,
              time,
              description: text,
              category: pasteCategoryList,
            };
      dispatch(createPaste(newPaste));
      setTitle('');  // Reset title after creation
      setText('');        // Reset text after creation
      setPasteCategoryList([]); // Clear selected categories
    }
  }
  function handelUpdatePaste(){

      if (title && text) {
          const Paste = {
            id : pasteId.id,
              title,
              time : new Date(),
              description: text,
              category: pasteCategoryList,
            };

      dispatch(updatePaste(Paste));
      navigate(`/PasteBox`)
    }
  }

  function onClick(){
    if(isEdit === true) handelUpdatePaste()
    else handelCreatePaste()
    setTitle('');  // Reset title after creation
      setText('');        // Reset text after creation
      setPasteCategoryList([]); // Clear selected categories
      navigate(`/PasteBox`)
  }

  // Function to validate category name
  function validCategory(name) {
    if (!name) {
      alert("Category name cannot be empty!");
      return false;
    }
    if (pasteCategoryList.find((cat) => cat.name === name)) {
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
        isSelected : true
      };
      // Add the category to the global state and pasteCategoryList
      dispatch(addCategory(newCategory));
      setPasteCategoryList((prev) =>  [...prev, newCategory.name]);
    }
  }

  return (
    <div className='absolute px-8 inset-0 z-0 m-4 bg-black/40 backdrop-blur-xl rounded-[32px] outline-2 outline-zinc-400/30 outline'>
      <NavBar onClick={onClick} lable={lable} />
      <CategoryBar
        pasteCategoryList={pasteCategoryList}
        setPasteCategoryList={setPasteCategoryList}
        handelCreateCategory={handelCreateCategory}
      />
      <PasteForm title={title} setTitle={setTitle} text={text} setText={setText} />
    </div>
  );
};
