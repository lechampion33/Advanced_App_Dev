import React from 'react';
import { NavLink } from 'react-router-dom'
import { AiOutlineUser, AiOutlineBook, AiOutlineQuestionCircle, AiOutlineDollarCircle } from 'react-icons/ai';
import { AiOutlineLogout } from 'react-icons/ai';
function UserSide() {
    
  return (
    <div className='bg-black w-[220px] flex flex-col h-screen shadow-xl rounded-xl ml-2 mt-2'>
      <h2 className='font-mono text-xl font-bold text-white flex p-3 justify-center items-center'>Course Compass</h2>
      <div className='flex flex-col pl-7 font-semibold font-sans gap-7 pt-7  text-white text-xl'>
      <NavLink to="/userdash"className='flex flex-row gap-2'>
        <AiOutlineUser size={25}/>
        <span>Your Profile</span>
      </NavLink>
      <NavLink to="/usercourse" className='flex flex-row gap-2'>
        <AiOutlineBook size={25} />
        <span>Courses</span>
      </NavLink>
      <NavLink to="/sub" className='flex flex-row gap-2'>
        <AiOutlineDollarCircle size={25}/>
        <span>Subscription</span>
      </NavLink>
      <NavLink to="/enquirytable" className='flex flex-row gap-2'>
           <AiOutlineQuestionCircle size={25} />
        <span>Enquiry</span>
       </NavLink>
      <NavLink to="/" className='flex flex-row gap-2'>
       <AiOutlineLogout size={25} /> Logout
      </NavLink> 
      </div>
    </div>
  )
}

export default UserSide
