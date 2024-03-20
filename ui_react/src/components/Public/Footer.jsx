import React from 'react';
import { NavLink } from 'react-router-dom';
import {SocialIcon} from "react-social-icons"

function Footer() {
  return (
    <div className='h-[10vh] flex flex-row justify-between items-center bg-black text-slate-50 p-10 absolute-bottom-0'>
      <div className='font-semibold'>
        <p>&copy;2024 Switchblade. All Rights Reserved</p>
      </div>
      <div className='flex flex-row space-x-10 font-mono font-semibold'> 
      <NavLink to='/terms'>Terms And Conditions</NavLink>
      <NavLink to='/policy'>Privacy Policy</NavLink>
      <NavLink to='/help'>FAQ</NavLink>
      </div>
      <div className="flex space-x-4 ">
      <SocialIcon url="www.twitter.com" style={{height:'40px',width:'40px'}} />
      <SocialIcon url="www.instagram.com"style={{height:'40px',width:'40px'}} />
      <SocialIcon url="www.facebook.com" style={{height:'40px',width:'40px'}}/>
      </div>
    </div>
  );
}

export default Footer;
