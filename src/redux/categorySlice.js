import { createSlice, nanoid } from "@reduxjs/toolkit";

export const initialState = {
    categoryList: [{
        id: nanoid(),
        name : 'All',
        color : 'pink'
        }
        ,{
    id: nanoid(),
    name : 'Redux',
    color : 'red'
    }]
}
const categorySlice = createSlice({
    name : 'category',
    initialState,
    reducers: {
        addCategory : (state, action) => {
            const {id, name, color} = action.payload
            if(id){
                const newCategory = {
                    id,
                    name,
                    color
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
    }
})

export const {addCategory, removeCategory} = categorySlice.actions
export default categorySlice.reducer
