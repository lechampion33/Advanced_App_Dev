import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineQuestionCircle, AiOutlineMail, AiOutlineMessage } from 'react-icons/ai';

function Navbar() {
  return (
    <div className='p-0.5 w-full flex flex-row bg-white text-black shadow-2xl'>
      <div className='w-2/5 font-mono font-semibold text-3xl p-5'>COURSE COMPASS</div>
      <div className='w-3/5 flex font-sans font-medium text-xl p-5 justify-end gap-10 '>
      <NavLink to="/help" className="flex items-center gap-2"><AiOutlineQuestionCircle size={20}/>FAQ</NavLink>
      <NavLink to="/contact" className="flex items-center gap-2"><AiOutlineMail size={20}/>Contact Us</NavLink>
      <NavLink to="/feedback" className="flex items-center gap-2"><AiOutlineMessage size={20}/>Feedback</NavLink>
    </div>
    </div>
  )
}

export default Navbar
