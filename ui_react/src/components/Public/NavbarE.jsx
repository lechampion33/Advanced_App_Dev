import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineQuestionCircle, AiOutlineDashboard } from 'react-icons/ai';
function NavbarE() {
  return (
    <div className='p-0.5 w-full flex flex-row bg-white text-black shadow-2xl'>
      <div className='w-2/5 font-mono font-semibold text-3xl p-5'>COURSE COMPASS</div>
      <div className='w-3/5 flex font-sans font-medium text-xl p-5 justify-end gap-10 '>
        <NavLink to="/help" className="flex items-center gap-2 "><AiOutlineQuestionCircle size={20}/>FAQ</NavLink>
        <NavLink to="/userdash" className="flex items-center gap-2"><AiOutlineDashboard size={20}/>Dashboard</NavLink>
      </div>
    </div>
  )
}

export default NavbarE
