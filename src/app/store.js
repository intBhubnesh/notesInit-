import { configureStore } from '@reduxjs/toolkit'
import pasteReducers from '../redux/pasteSlice.js'
import themeReducers from '../redux/themeSlice.js'
import categoryReducers from "../redux/categorySlice.js"
import { persistMiddleware } from './persistMiddleware.js'

export default configureStore({
  reducer: {
    Paste: pasteReducers,
    Theme: themeReducers,
    Category : categoryReducers
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistMiddleware), // Add custom middleware
})
