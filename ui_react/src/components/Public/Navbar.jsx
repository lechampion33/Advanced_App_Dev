import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const links=[
        {
            name:'Home',
            path:'/'
        },
        {
            name:'Contact',
            path:'/contact'
        },
        {
            name:'Login',
            path:'/login'
        }
    ]
  return (
    <>
  <div className='h-[10vh] flex flex-row justify-center bg-blue-800 text-slate-50'>
    <div className='w-[80%] h-full flex flex-row justify-between items-center'>
        <div className='w-[100vh]'>
         <h2 className='font-mono font-semibold text-2xl'>COURSE COMPASS</h2>
        </div>
        <div className='w-1/4 flex flex-row justify-between font-medium text-xl'>  
        {links.map((link,index)=>(
          <NavLink key={index} to={link.path} className='cursor-pointer'>
            {link.name}
          </NavLink>
          ))
        }
        </div>
    </div>
  </div>
    </>
  )
}

export default Navbar
