import React from 'react'
import { AiOutlineCheck, AiOutlineCheckCircle, AiOutlineSelect } from 'react-icons/ai';
function UserSub() {
  return (
    <div className='flex flex-col font-sans p-5 w-screen h-screen'>
      <h2 className='font-sans font-bold text-2xl pb-3  text-black flex'>Subscriptions</h2>
      <p className='font-semibold pt-2 text-xl pb-10'>Manage your Course Hunt subscriptions</p>
      <div className='flex p-5 flex-row '>
         <div className='flex flex-col w-[50vh] h-[50vh] bg-black gap-6 justify-center items-center text-white shadow-2xl '>
          <h2 className='font-sans text-3xl font-bold'>Basic/Free Plan</h2>
          <p className='font-sans text-xl font-bold flex items-center'>
  <AiOutlineCheckCircle className="mr-2" /> Limited Courses
</p>
<p className='font-sans text-xl font-bold flex items-center'>
  <AiOutlineCheck className="mr-2" /> Limited Classes
</p>
<button className='bg-red-400 text-black font-sans text-xl font-bold p-2 rounded-md flex items-center'>
  <AiOutlineSelect className="mr-2" /> Choose
</button>
         </div>
         <div className='flex flex-col bg-blue-800 w-[50vh] h-[50vh] text-white shadow-2xl gap-6 justify-center items-center cursor-pointer mr-7 ml-7'>
         <h2 className='font-sans text-3xl font-bold'>Silver Plan</h2>
          <p className='font-sans text-xl font-bold flex items-center'>
  <AiOutlineCheckCircle className="mr-2" /> More Courses
</p>
<p className='font-sans text-xl font-bold flex items-center'>
  <AiOutlineCheck className="mr-2" /> Live Classes
</p>
<button className='bg-red-600 text-black font-sans text-xl font-bold p-2 rounded-md flex items-center'>
  <AiOutlineSelect className="mr-2" /> $630/Month Choose
</button>
         </div>
         <div className='flex flex-col w-[50vh] h-[50vh] bg-amber-400 shadow-2xl justify-center gap-6 items-center'>
         <h2 className='font-sans text-3xl font-bold'>Gold Plan</h2>
          <p className='font-sans text-xl font-bold flex items-center'>
  <AiOutlineCheckCircle className="mr-2" /> Weekly Tests
</p>
<p className='font-sans text-xl font-bold flex items-center'>
  <AiOutlineCheck className="mr-2" /> Special Guidence 
</p>
<button className='bg-white text-black font-sans text-xl font-bold p-2 rounded-md flex items-center cursor-pointer'>
  <AiOutlineSelect className="mr-2" /> $1030/Month Choose
</button>
         </div>
         </div>
    </div>
  )
}

export default UserSub
