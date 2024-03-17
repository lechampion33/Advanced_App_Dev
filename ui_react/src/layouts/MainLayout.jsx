import React from 'react'
import Navbar2 from '../components/Public/Navbar2'
import Footer from '../components/Public/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
    <div>
      <Navbar2/>
      <div>
         <Outlet/>
      </div>
      <Footer/>
      </div>
    </>
  )
}

export default MainLayout
