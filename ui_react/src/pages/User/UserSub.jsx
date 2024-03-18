import React from 'react'

function UserSub() {
  return (
    <div className='flex flex-col font-sans p-5 w-screen h-screen'>
      <h2 className='font-sans font-bold text-2xl pb-3  text-black flex'>Subscriptions</h2>
      <p className='font-semibold pt-2 text-xl pb-10'>Manage your Course Hunt subscriptions</p>
      <div className='flex p-5 flex-row '>
         <div className='flex flex-col w-[50vh] h-[50vh] bg-white shadow-2xl cursor-pointer'>
          
         </div>
         <div className='flex flex-col w-[50vh] h-[50vh] bg-white shadow-2xl cursor-pointer mr-7 ml-7'>
          
         </div>
         <div className='flex flex-col w-[50vh] h-[50vh] bg-black shadow-2xl cursor-pointer'>
         
         </div>
         </div>
    </div>
  )
}

export default UserSub
