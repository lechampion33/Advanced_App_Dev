import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineUser, AiOutlineBook,  AiOutlineDashboard , AiOutlineDollarCircle } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
function AdminSide() {
  return (
    <div className='bg-black w-[220px] flex flex-col h-screen shadow-xl rounded-xl ml-2 mt-2'>
      <h2 className='font-mono text-xl font-bold text-white flex p-3 justify-center items-center'>Course Compass</h2>
      <div className='flex flex-col pl-7 font-semibold font-sans gap-7 pt-7  text-white text-xl'>
      <NavLink to="/board"className='flex flex-row gap-2'>
        < AiOutlineDashboard  size={25}/>
        <span>Dashboard</span>
      </NavLink>
      <NavLink to="/users"className='flex flex-row gap-2'>
        <AiOutlineUser size={25}/>
        <span>Users</span>
      </NavLink>
      <NavLink to="/adminc" className='flex flex-row gap-2'>
        <AiOutlineBook size={25} />
        <span>Courses</span>
      </NavLink>
      <NavLink to="/adminpayment" className='flex flex-row gap-2'>
        <AiOutlineDollarCircle size={25} />
        <span>Payment</span>
      </NavLink>
      <NavLink to="/adminmails" className='flex flex-row gap-2'>
        <AiOutlineMail size={25}/>
        <span>Mails</span>
      </NavLink>
      </div>
    </div>
  )
}

export default AdminSide
