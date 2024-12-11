import { createSlice, nanoid } from "@reduxjs/toolkit";
import { loadState, saveState } from "../app/sessionStorage";
import { toast } from "react-toastify";

const categorySessionKey = "categoryList"
export const initialState = {
    categoryList: loadState(categorySessionKey, [{
        id: nanoid(),
        name : 'All',
        isSelected : true
        }
        ,{
    id: nanoid(),
    name : 'Redux',
    isSelected : false
    }])
}
const categorySlice = createSlice({
    name : 'category',
    initialState,
    reducers: {
        addCategory : (state, action) => {
            const {id, name, isSelected} = action.payload
            if(state.categoryList.find(cat => cat.name === name)){
                alert('added to the existing category !')
            }
            else{
                if(id){
                    const newCategory = {
                        id,
                        name,
                        isSelected
                    }
                    state.categoryList.push(newCategory)
                }}
        },
        removeCategory : (state, action) => {
            const removeCategoryId = action.payload
            if(removeCategoryId){
                state.categoryList = state.categoryList.filter((cat) => cat.id !== removeCategoryId)
            }
        },
        selectCategory : (state, action) => {
            const selectedCategoryId = state.categoryList.find(cat => cat.id === action.payload)

            if(selectedCategoryId){
                selectedCategoryId.isSelected = !selectedCategoryId.isSelected
            }
        },
        resetCategory : (state) => {
            state.categoryList = [{ id: nanoid(), name: 'All', isSelected: true }];
            saveState(categorySessionKey, state.categoryList);
            toast.success('All categories have been reset.', { theme: 'colored' });

        }
    }
})

export const {addCategory, removeCategory, selectCategory, resetCategory} = categorySlice.actions
export default categorySlice.reducer
