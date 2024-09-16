import React from 'react'
import CustomNavbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
    <CustomNavbar/>
    <Outlet/>
    </>
  )
}

export default Layout