import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import  PasteBox  from './section/PasteBox'
import CreatePaste  from './section/CreatePaste'



const routes = createBrowserRouter([
    {
        path:'/pasteList',
        element :
        <div>
            <PasteBox />
        </div>
    },
    {
        path:"/",
        element:
        <div>
            <CreatePaste/>
        </div>
    },
    {
        path:"/pasteList/:id",
        element:
        <div>

        </div>
    }
])

function App() {

  return (
    <>
        <RouterProvider router={routes} />
    </>
  )
}

export default App
