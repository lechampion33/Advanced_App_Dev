import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineCompass, AiOutlineMail, AiOutlineLogin } from 'react-icons/ai';

function Navbar2() {
  return (
    <div className='p-0.5 w-full flex flex-row bg-white text-black shadow-2xl rounded-3xl'>
      <div className='w-2/5 font-mono font-semibold text-3xl p-5'>COURSE COMPASS</div>
      <div className='w-3/5 flex font-sans font-medium text-xl p-5 justify-end gap-10 '>
        <NavLink to="/explore" className="flex items-center gap-2 ">
          <AiOutlineCompass size={20} /> Explore
        </NavLink>
        <NavLink to="/contact" className="flex items-center gap-2">
          <AiOutlineMail size={20} /> Contact Us
        </NavLink>
        <NavLink to="/login" className="flex items-center gap-2">
          <AiOutlineLogin size={20} /> Login
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar2;
