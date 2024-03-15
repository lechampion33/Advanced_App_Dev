import React from 'react'
import Navbar from '../components/Public/Navbar'
import Footer from '../components/Public/Footer'
import {Outlet} from 'react-router-dom'
function WebLayout() {
  return (
   <>
   <div>
     <Navbar/>
     <div>
        <Outlet/>
     </div>
     <Footer/>
     </div>
   </>
  )
}

export default WebLayout
