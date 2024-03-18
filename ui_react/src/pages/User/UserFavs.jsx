import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import IT from '../../assets/img/IT.jpg'
import Game from '../../assets/img/game.jpg'
import Mongo from '../../assets/img/write.jpg'
function UserFavs() {
  return (
    <div className='flex flex-col pt-10 pl-2 w-screen'>
      <h2 className='font-sans font-bold text-xl flex gap-2 flex-row '> <AiOutlineHeart size={30} />Your Favourite Courses</h2>
      <div className='flex p-5 flex-row '>
         <div className='flex flex-col w-[50vh] h-[50vh] bg-white shadow-2xl cursor-pointer'>
          <img src={IT} className='w-[100%] h-[50%]'></img>
          <h2 className='font-sans pt-3 pl-3 font-bold text-xl'>IT Networking Fundamentals Exclusively for Beginners</h2>
          <p className='font-sans pt-2 pl-3 font-semibold text-xs text-slate-600'>By: Stephen Curry</p>
          <div className='flex flex-row '>
          <div className='bg-red-600 mt-3 p-2 text-xl font-mono text-bold flex justify-center items-center text-white  w-[100%]'>
            <h2 className=''>Start To Learn</h2>
          </div>
          </div>
         </div>
         <div className='flex flex-col w-[50vh] h-[50vh] bg-white shadow-2xl cursor-pointer mr-7 ml-7'>
          <img src={Game} className='w-[100%] h-[50%]'></img>
          <h2 className='font-sans pt-3 pl-3 font-bold text-xl'>Learn game development with javascript</h2>
          <p className='font-sans pt-2 pl-3 font-semibold text-xs text-slate-600'>By:Klay Thompson</p>
          <div className='flex flex-row '>
          <div className='bg-red-600 mt-3 p-2 text-xl font-mono text-bold flex justify-center items-center text-white  w-[100%]'>
            <h2 className=''>Start To Learn</h2>
          </div>
          </div>
         </div>
         <div className='flex flex-col w-[50vh] h-[50vh] bg-white shadow-2xl cursor-pointer'>
          <img src={Mongo} className='w-[100%] h-[50%]'></img>
          <h2 className='font-sans pt-3 pl-3 font-bold text-xl'>Basics: Introduction to the mongodb</h2>
          <p className='font-sans pt-2 pl-3 font-semibold text-xs text-slate-600'>By:Rohit Sharma</p>
          <div className='flex flex-row '>
          <div className='bg-red-600 mt-3 p-2 text-xl font-mono text-bold flex justify-center items-center text-white  w-[100%]'>
            <h2 className=''>Start To Learn</h2>
          </div>
          </div>
         </div>
      </div>
    </div>
  )
}

export default UserFavs
