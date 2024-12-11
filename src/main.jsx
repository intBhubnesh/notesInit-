import {  React } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './app/store'
import './index.css'
import Layout from './Layout.jsx'
import { PasteBoxForground } from './components/PasteBoxForground.jsx'
import { CreatePasteForground } from './components/CreatePasteForground.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { ViewPasteForgorund } from './components/ViewPasteForgorund.jsx'



const routes = createBrowserRouter([
    {
        path:'/',
        element : <Layout/>,
        children :[
            {
                path:'',
                element : <CreatePasteForground/>
            },
            {
                path:'/PasteBox',
                element : <PasteBoxForground />
            },
            {
                path:'/:id',
                element : <CreatePasteForground />
            },
            {
                path:'/ViewPaste/:id',
                element : <ViewPasteForgorund/>
            },

        ]
}])


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
        <RouterProvider router={routes} />
  </Provider>,
)
