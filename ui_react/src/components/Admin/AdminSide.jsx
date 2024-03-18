import React from 'react'

function AdminSide() {
  return (
    <div className='bg-black w-[220px] flex flex-col h-screen shadow-xl rounded-xl ml-2 mt-2'>
      <h2 className='font-mono text-2xl font-bold text-white flex p-3 justify-center items-center'>Course Hunt</h2>
      <div className='flex flex-col pl-7 font-semibold font-sans gap-7 pt-7  text-white text-xl'>
      <NavLink to="/userdash"className='flex flex-row gap-2'>
        <AiOutlineUser size={25}/>
        <span>Users</span>
      </NavLink>
      <NavLink to="/usercourse" className='flex flex-row gap-2'>
        <AiOutlineBook size={25} />
        <span>Courses</span>
      </NavLink>
      <NavLink to="/favs" className='flex flex-row gap-2'>
        <AiOutlineStar size={25} />
        <span>Payment</span>
      </NavLink>
      <NavLink to="/sub" className='flex flex-row gap-2'>
        <AiOutlineDollarCircle size={25}/>
        <span>Mails</span>
      </NavLink>
      </div>
    </div>
  )
}

export default AdminSide
