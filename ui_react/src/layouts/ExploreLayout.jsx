import React from 'react'
import NavbarE from '../components/Public/NavbarE'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Public/Footer'

function ExploreLayout() {
  return (
    <>
    <div>
      <NavbarE/>
      <div>
         <Outlet/>
      </div>
      <Footer/>
      </div>
    </>
  )
}

export default ExploreLayout
