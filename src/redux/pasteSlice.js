import { createSlice, nanoid } from '@reduxjs/toolkit'
import { loadState, saveState } from '../app/sessionStorage'

const pasteSessionKey = "pasteList"
const initialState = {
    pasteList : loadState(pasteSessionKey ,[{
        id : nanoid(),
        title : "paste app",
        time : '20 min',
        description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum neque repellat harum, accusamus facere esse, eligendi, iusto id asperiores aliquid natus ipsum doloribus',
        category : ["All"],
    }])
}

export const pasteSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    createPaste: (state, action) => {
        const {id, title, time='20 min', description, category=[] } = action.payload
        if(id){
            const newPaste = {
                id,
                title,
                time,
                description,
                category : category
            }
            state.pasteList.push(newPaste)
        }
    },
    updatePaste: (state, action) => {
        const { id, title, time='20 min', description, category=[] } = action.payload
        const updatePaste = state.pasteList.find(paste => paste.id === id )
        console.log('bye',updatePaste)
        if(updatePaste){
                updatePaste.title = title,
                updatePaste.time = time,
                updatePaste.description = description,
                updatePaste.category =  category
        }
    },
    deletePaste: (state, action) => {
        if(action.payload)
            state.pasteList = state.pasteList.filter(paste => paste.id !== action.payload)

    },
    resetPaste: (state) => {
        state.pasteList = []
        saveState(pasteSessionKey, state.pasteList)
    },
  },
})

// Action creators are generated for each case reducer function
export const { createPaste, updatePaste, deletePaste, resetPaste } = pasteSlice.actions

export default pasteSlice.reducer
