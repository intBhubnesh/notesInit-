import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

import { NavBar } from './components/NavBar'
import { Background } from './components/Background'

function Layout() {

  return (
    <>
    <Background />
    <Outlet />
    </>
  )
}

export default Layout
