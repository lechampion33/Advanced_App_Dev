import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineQuestionCircle, AiOutlineMail } from 'react-icons/ai';

function Navbar() {
  return (
    <div className='p-0.5 w-full flex flex-row bg-blue-800 text-slate-50 shadow-2xl'>
      <div className='w-2/5 font-mono font-semibold text-3xl p-5'>COURSE COMPASS</div>
      <div className='w-3/5 flex font-sans font-medium text-xl p-5 justify-end gap-10 '>
        <NavLink className="flex items-center gap-2 "><AiOutlineQuestionCircle size={20}/>Help</NavLink>
        <NavLink to="/contact" className="flex items-center gap-2"><AiOutlineMail size={20}/>Contact Us</NavLink>
      </div>
    </div>
  )
}

export default Navbar
