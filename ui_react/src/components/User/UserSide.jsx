import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineUser, AiOutlineBook, AiOutlineStar, AiOutlineDollarCircle } from 'react-icons/ai';
function UserSide() {
  return (
    <div className='bg-blue-800 w-[220px] flex flex-col h-screen shadow-xl rounded-xl ml-2 mt-2'>
      <h2 className='font-mono text-2xl font-bold text-white flex p-3 justify-center items-center'>Course Hunt</h2>
      <div className='flex flex-col pl-7 font-semibold font-sans gap-7 pt-7  text-white text-xl'>
      <NavLink to="/userdash"className='flex flex-row gap-2'>
        <AiOutlineUser size={25}/>
        <span>Your Profile</span>
      </NavLink>
      <NavLink to="/usercourse" className='flex flex-row gap-2'>
        <AiOutlineBook size={25} />
        <span>Courses</span>
      </NavLink>
      <NavLink to="/favs" className='flex flex-row gap-2'>
        <AiOutlineStar size={25} />
        <span>Favs</span>
      </NavLink>
      <NavLink to="/subscription" className='flex flex-row gap-2'>
        <AiOutlineDollarCircle size={25}/>
        <span>Subscription</span>
      </NavLink>
      </div>
      <div className='h-[5vh] flex justify-center items-end'>
        <button>Logout</button>
        </div>
    </div>
  )
}

export default UserSide
