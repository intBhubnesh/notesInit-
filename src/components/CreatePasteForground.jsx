import React, {  useEffect, useState } from 'react';
import { NavBar } from './NavBar';
import { CategoryBar } from './CategoryBar';
import { PasteForm } from './PasteForm';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../redux/categorySlice';
import { nanoid } from '@reduxjs/toolkit';
import { createPaste, updatePaste } from '../redux/pasteSlice';
import {  useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export const CreatePasteForground = () => {

    const dispatch = useDispatch();
    const [searchParam] = useSearchParams()
    const isEdit = searchParam.get('edit')  ? true : false
    const [lable] = useState(isEdit ? 'Edit' : 'Create')
    const pasteId = useParams('id')
    const paste = useSelector(state => state.Paste.pasteList.find(paste => paste.id === pasteId.id))
    const [pasteCategoryList, setPasteCategoryList] = useState(paste ? paste.category : []);
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
      return true
    }
    else{
        // tostify message dont create empty paste
        return false
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
      return true
    }else {
        return false
    }
  }

  function onClick(){
    const validPaste = isEdit === true ? handelUpdatePaste() : handelCreatePaste()
    setTitle('');  // Reset title after creation
      setText('');        // Reset text after creation
      setPasteCategoryList([]); // Clear selected categories

      if(validPaste){
        toast.success('Paste created successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
    });
      navigate(`/PasteBox`)}
      else{
        toast.warn('Paste is Empty', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
        })
      }
  }

  // Function to validate category name
  function validCategory(name) {
    if (!name) {
      toast.warn("Category name cannot be empty!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return false;
    }

    // Check if the category already exists
    if (pasteCategoryList.includes(name)) {
      toast.warn("Category already exists!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
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
      console.log("ok", pasteCategoryList)
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
