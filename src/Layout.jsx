import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Background } from './components/Background'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Layout() {

  return (
    <>
    <Background />
    <Outlet />
    <ToastContainer />
    </>
  )
}

export default Layout
