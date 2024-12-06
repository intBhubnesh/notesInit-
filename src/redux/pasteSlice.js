import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    pasteList : [{
        id : nanoid(),
        title : "paste app",
        description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum neque repellat harum, accusamus facere esse, eligendi, iusto id asperiores aliquid natus ipsum doloribus',
        category : ["all"],
    }]
}

export const pasteSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    createPaste: (state, action) => {
        const {id, title, description, category } = action.payload
        if(id){
            const newPaste = {
                id,
                title,
                description,
                category
            }
            state.pasteList.push(newPaste)
        }
    },
    updatePaste: (state, action) => {

    },
    deletePaste: (state, action) => {

    },
    resetPaste: (state, action) => {

    },
  },
})

// Action creators are generated for each case reducer function
export const { createPaste, updatePaste, deletePaste, resetPaste } = pasteSlice.actions

export default pasteSlice.reducer
