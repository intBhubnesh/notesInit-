import { createSlice, nanoid } from "@reduxjs/toolkit";

export const initialState = {
    categoryList: [{
        id: nanoid(),
        name : 'All',
        isSelected : true
        }
        ,{
    id: nanoid(),
    name : 'Redux',
    isSelected : false
    }]
}
const categorySlice = createSlice({
    name : 'category',
    initialState,
    reducers: {
        addCategory : (state, action) => {
            const {id, name, isSelected} = action.payload
            if(id){
                const newCategory = {
                    id,
                    name,
                    isSelected
                }
                state.categoryList.push(newCategory)
            }
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
        }
    }
})

export const {addCategory, removeCategory, selectCategory} = categorySlice.actions
export default categorySlice.reducer
