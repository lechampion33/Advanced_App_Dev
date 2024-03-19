import React from 'react'
import Navbar3 from '../components/Public/Navbar3'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Public/Footer'

function TermsLayout() {
  return (
    <>
   <div>
     <Navbar3/>
     <div>
        <Outlet/>
     </div>
     <Footer/>
     </div>
   </>
  )
}

export default TermsLayout
