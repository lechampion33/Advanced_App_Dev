import React from 'react'
import hom from '../assets/img/home3img.png';
import { AiFillFire,AiOutlineGlobal } from 'react-icons/ai';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import Network3 from '../assets/img/network 3.jpg'
import Network2 from '../assets/img/network2.jpg'
import Network1 from '../assets/img/network1.jpg'
import IT from '../assets/img/IT.jpg'
import AWS from '../assets/img/aws.jpg'
import Cisco from '../assets/img/cisco.jpg'
import Web1 from '../assets/img/web1.jpg'
import Web2 from '../assets/img/web2.jpg'
import Web3 from '../assets/img/web3.jpg'
function Explore() {
  return (
   
    <div className='flex flex-col  p-10'>
    <div className='flex font-mono font-bold text-3xl pl-4'>
          <AiFillFire size={40}className="mr-2 text-red-500" />
          Trending Courses
        </div>
       <div className='flex p-10 flex-row justify-between'>
         <div className='flex flex-col w-[55vh] h-[50vh] bg-white shadow-2xl cursor-pointer'>
          <img src={IT} className='w-[100%] h-[50%]'></img>
          <h2 className='font-sans pt-3 pl-3 font-bold text-xl'>IT Networking Fundamentals Exclusively for Beginners</h2>
          <p className='font-sans pt-2 pl-3 font-semibold text-xs text-slate-600'>By: Stephen Curry</p>
          <div className='flex flex-row'>
          <button className='flex justify-center items-center px-4 font-mono mt-3 bg-black text-white w-[50%] h-[7vh]'>
        <AiOutlineHeart className="mr-2" /> Favs
      </button>
      <button className='flex justify-center items-center px-4 font-mono mt-3 bg-blue-800 text-white w-[50%] h-[7vh]'>
        <AiOutlineShoppingCart className="mr-2" /> Cart
      </button>
          </div>
         </div>
         <div className='flex flex-col w-[55vh] h-[50vh] bg-white shadow-2xl cursor-pointer'>
          <img src={AWS} className='w-[100%] h-[50%]'></img>
          <h2 className='font-sans pt-3 pl-3 font-bold text-xl'>Ultimate AWS Certified Solutions Architect Associate</h2>
          <p className='font-sans pt-2 pl-3 font-semibold text-xs text-slate-600'>By: Stephen Curry</p>
          <div className='flex flex-row'>
          <button className='flex justify-center items-center px-4 font-mono mt-3 bg-black text-white w-[50%] h-[7vh]'>
        <AiOutlineHeart className="mr-2" /> Favs
      </button>
      <button className='flex justify-center items-center px-4 font-mono mt-3 bg-blue-800 text-white w-[50%] h-[7vh]'>
        <AiOutlineShoppingCart className="mr-2" /> Cart
      </button>
          </div>
         </div>
         <div className='flex flex-col w-[55vh] h-[50vh] bg-white shadow-2xl cursor-pointer'>
          <img src={Cisco} className='w-[100%] h-[50%]'></img>
          <h2 className='font-sans pt-3 pl-3 font-bold text-xl'>Cisco Renewals Manager Training (CRM 700-805)</h2>
          <p className='font-sans pt-2 pl-3 font-semibold text-xs text-slate-600'>By: Stephen Curry</p>
          <div className='flex flex-row'>
          <button className='flex justify-center items-center px-4 font-mono mt-3 bg-black text-white w-[50%] h-[7vh]'>
        <AiOutlineHeart className="mr-2" /> Favs
      </button>
      <button className='flex justify-center items-center px-4 font-mono mt-3 bg-blue-800 text-white w-[50%] h-[7vh]'>
        <AiOutlineShoppingCart className="mr-2" /> Cart
      </button>
          </div>
         </div>
    </div>
    <div className='flex font-mono font-bold text-3xl pl-4'>
      <AiOutlineGlobal size={40} className="mr-2 text-red-500" />
      Network Courses
    </div>
    <div className='flex p-10 flex-row justify-between'>
         <div className='flex flex-col w-[55vh] h-[50vh] bg-white shadow-2xl cursor-pointer'>
          <img src={Network3} className='w-[100%] h-[50%]'></img>
          <h2 className='font-sans pt-3 pl-3 font-bold text-xl'>Unlock ISO 27001 Information Security Essential Training</h2>
          <p className='font-sans pt-2 pl-3 font-semibold text-xs text-slate-600'>By: Stephen Curry</p>
          <div className='flex flex-row'>
          <button className='flex justify-center items-center px-4 font-mono mt-3 bg-black text-white w-[50%] h-[7vh]'>
        <AiOutlineHeart className="mr-2" /> Favs
      </button>
      <button className='flex justify-center items-center px-4 font-mono mt-3 bg-blue-800 text-white w-[50%] h-[7vh]'>
        <AiOutlineShoppingCart className="mr-2" /> Cart
      </button>
          </div>
         </div>
         <div className='flex flex-col w-[55vh] h-[50vh] bg-white shadow-2xl cursor-pointer'>
          <img src={Network1} className='w-[100%] h-[50%]'></img>
          <h2 className='font-sans pt-3 pl-3 font-bold text-xl'>Unlock ISO 27001 Information Security Essential Training</h2>
          <p className='font-sans pt-2 pl-3 font-semibold text-xs text-slate-600'>By: Chris Paul</p>
          <div className='flex flex-row'>
          <button className='flex justify-center items-center px-4 font-mono mt-3 bg-black text-white w-[50%] h-[7vh]'>
        <AiOutlineHeart className="mr-2" /> Favs
      </button>
      <button className='flex justify-center items-center px-4 font-mono mt-3 bg-blue-800 text-white w-[50%] h-[7vh]'>
        <AiOutlineShoppingCart className="mr-2" /> Cart
      </button>
          </div>
         </div>
         <div className='flex flex-col w-[55vh] h-[50vh] bg-white shadow-2xl cursor-pointer'>
          <img src={Network2} className='w-[100%] h-[50%]'></img>
          <h2 className='font-sans pt-3 pl-3 font-bold text-xl'>Basics of Email Security And Information Security</h2>
          <p className='font-sans pt-2 pl-3 font-semibold text-xs text-slate-600'>By: Stephen Curry</p>
          <div className='flex flex-row'>
          <button className='flex justify-center items-center px-4 font-mono mt-3 bg-black text-white w-[50%] h-[7vh]'>
        <AiOutlineHeart className="mr-2" /> Favs
      </button>
      <button className='flex justify-center items-center px-4 font-mono mt-3 bg-blue-800 text-white w-[50%] h-[7vh]'>
        <AiOutlineShoppingCart className="mr-2" /> Cart
      </button>
          </div>
         </div>
         </div>
         <div className='flex font-mono font-bold text-3xl pl-4'>
      <AiOutlineGlobal size={40} className="mr-2 text-red-500" />
      WebDevelopment Courses
    </div>
    <div className='flex p-10 flex-row justify-between'>
         <div className='flex flex-col w-[55vh] h-[50vh] bg-white shadow-2xl cursor-pointer'>
          <img src={Web1} className='w-[100%] h-[50%]'></img>
          <h2 className='font-sans pt-3 pl-3 font-bold text-xl'>Become a Web Developer: 2024 Bootcamp</h2>
          <p className='font-sans pt-2 pl-3 font-semibold text-xs text-slate-600'>By: Stephen Curry</p>
          <div className='flex flex-row'>
          <button className='flex justify-center items-center px-4 font-mono mt-3 bg-black text-white w-[50%] h-[7vh]'>
        <AiOutlineHeart className="mr-2" /> Favs
      </button>
      <button className='flex justify-center items-center px-4 font-mono mt-3 bg-blue-800 text-white w-[50%] h-[7vh]'>
        <AiOutlineShoppingCart className="mr-2" /> Cart
      </button>
          </div>
         </div>
         <div className='flex flex-col w-[55vh] h-[50vh] bg-white shadow-2xl cursor-pointer'>
          <img src={Web2} className='w-[100%] h-[50%]'></img>
          <h2 className='font-sans pt-3 pl-3 font-bold text-xl'>Build a Learning Management System with Django and React</h2>
          <p className='font-sans pt-2 pl-3 font-semibold text-xs text-slate-600'>By: Chris Paul</p>
          <div className='flex flex-row'>
          <button className='flex justify-center items-center px-4 font-mono mt-3 bg-black text-white w-[50%] h-[7vh]'>
        <AiOutlineHeart className="mr-2" /> Favs
      </button>
      <button className='flex justify-center items-center px-4 font-mono mt-3 bg-blue-800 text-white w-[50%] h-[7vh]'>
        <AiOutlineShoppingCart className="mr-2" /> Cart
      </button>
          </div>
         </div>
         <div className='flex flex-col w-[55vh] h-[50vh] bg-white shadow-2xl cursor-pointer'>
          <img src={Web3} className='w-[100%] h-[50%]'></img>
          <h2 className='font-sans pt-3 pl-3 font-bold text-xl'>React & Flutter Frontend + Java Spring Boot & NodeJs Backend</h2>
          <p className='font-sans pt-2 pl-3 font-semibold text-xs text-slate-600'>By: Stephen Curry</p>
          <div className='flex flex-row'>
          <button className='flex justify-center items-center px-4 font-mono mt-3 bg-black text-white w-[50%] h-[7vh]'>
        <AiOutlineHeart className="mr-2" /> Favs
      </button>
      <button className='flex justify-center items-center px-4 font-mono mt-3 bg-blue-800 text-white w-[50%] h-[7vh]'>
        <AiOutlineShoppingCart className="mr-2" /> Cart
      </button>
          </div>
         </div>
         </div>
         
    </div>
  )
}

export default Explore
