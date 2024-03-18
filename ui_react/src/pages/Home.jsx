import React from 'react';
import hom from '../assets/img/homeimg.png';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { AiFillFire } from 'react-icons/ai';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import IT from '../assets/img/IT.jpg'
import AWS from '../assets/img/aws.jpg'
import Cisco from '../assets/img/cisco.jpg'
import Write from '../assets/img/write.jpg'
import ICT from '../assets/img/ict.jpg'
import JS from '../assets/img/js.jpg'
function Home() {
  return (
    <div className=''>
    <div className="flex flex-row items-center  pt-10  font-mono pb-3">
      <div className="flex flex-col ml-4 w-[50%] p-5 gap-4">
        <h2 className='font-sans font-bold text-4xl'>Subscribe to the best of Course Compass</h2>
        <p className="fade-in">With Personal Plan, you get access to 8,000 of our top-rated courses in tech, business, and more.</p>
        <button className="flex items-center px-4 font-mono py-2 mt-4 bg-blue-800 text-white rounded-md w-[30%]">
          <AiOutlinePlayCircle size={20} className="mr-2" />
          Get Started
        </button>
      </div>
      <img src={hom} alt="Home" className="pr-4 h-auto w-[100vh] max-h-80" />
    </div>
  <div className='flex flex-col p-5'>
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
       <div className='flex p-10 flex-row justify-between'>
         <div className='flex flex-col w-[55vh] h-[50vh] bg-white shadow-2xl cursor-pointer'>
          <img src={Write} className='w-[100%] h-[50%]'></img>
          <h2 className='font-sans pt-3 pl-3 font-bold text-xl'>Writing Effective Business Emails udemy</h2>
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
          <img src={JS} className='w-[100%] h-[50%]'></img>
          <h2 className='font-sans pt-3 pl-3 font-bold text-xl'>JavaScript:Understanding the weird parts</h2>
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
          <img src={ICT} className='w-[100%] h-[50%]'></img>
          <h2 className='font-sans pt-3 pl-3 font-bold text-xl'>Intermediate Computer Forensics</h2>
          <p className='font-sans pt-2 pl-3 font-semibold text-xs text-slate-600'>By: Stephen Curry</p>
          <div className='flex flex-row'>
          <button className='flex justify-center items-center px-4 font-mono mt-3 bg-blue-800 text-white w-[50%] h-[7vh]'>
        <AiOutlineHeart className="mr-2" /> Favs
      </button>
      <button className='flex justify-center items-center px-4 font-mono mt-3 bg-black text-white w-[50%] h-[7vh]'>
        <AiOutlineShoppingCart className="mr-2" /> Cart
      </button>
          </div>
         </div>
       </div>
      </div>
      <div className='flex flex-row'>
      <div className='flex flex-col font-sans'> 
        <h2 className='justify-center items-center flex text-3xl font-bold'>Why Join Course Compass</h2>
        <div className='flex flex-row gap-10 px-40 py-20'>
        <div className="flex justify-center items-center w-[20vh] h-[20vh]">
      <lord-icon
        src="https://cdn.lordicon.com/kthelypq.json"
        trigger="hover"
        class="w-[20vh] h-[20vh] text-blue-500 hover:text-blue-700"
      ></lord-icon>
    </div>
        <div className='flex flex-col w-[50%] gap-5'>
          <h2 className='flex font-mono font-bold text-2xl'>
            Personalized
          </h2>
            <p className='w-[80%]'>Get customized class recommendations based on your interests.</p>
       </div>
       <div className="flex justify-center items-center w-[20vh] h-[20vh]">
      <lord-icon
        src="https://cdn.lordicon.com/zyzoecaw.json"
        trigger="hover"
        class="w-[20vh] h-[20vh] text-blue-500 hover:text-blue-700"
      ></lord-icon>
    </div>
          <div className='flex flex-col w-[50%] gap-3'>
          <h2 className='flex font-mono font-bold text-2xl'>
          Thousands of Classes
          </h2>
            <p className='w-[80%]'>Build a portfolio of projects that showcases your skills.</p>
          </div>
          </div>
        <div className='flex flex-row gap-10 px-40 py-5'>
               <div className="flex justify-center items-center w-[20vh] h-[20vh]">
                   <lord-icon
                   src="https://cdn.lordicon.com/rbbnmpcf.json"
                       trigger="hover"
                  class="w-[20vh] h-[20vh] text-blue-500 hover:text-blue-700"
                   ></lord-icon>
                </div>
          <div className='flex flex-col w-[50%] gap-5'>
               <h2 className='flex font-mono font-bold text-2xl'>
               On-Demand
                </h2>
             <p className='w-[80%]'>Watch bite-sized classes on your own schedule, anytime, anywhere on desktop or mobile app.</p>
          </div>
          <div className="flex justify-center items-center w-[20vh] h-[20vh]">
                   <lord-icon
                   src="https://cdn.lordicon.com/fdxqrdfe.json"
                       trigger="hover"
                  class="w-[20vh] h-[20vh] text-blue-500 hover:text-blue-700"
                   ></lord-icon>
                </div>
          <div className='flex flex-col w-[50%] gap-5'>
               <h2 className='flex font-mono font-bold text-2xl'>
               Online Community
                </h2>
             <p className='w-[80%]'>Ask questions, exchange feedback, and learn alongside other students.</p>
          </div>
       </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
