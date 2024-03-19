import React from 'react'
import {useNavigate } from 'react-router-dom'
function AdminTop() {
  const navigate = useNavigate()
    const handleHome = () => {
        navigate('/')
    }
  return (
    <div className='w-[82vw] h-[10vh] flex items-center justify-center  mt-2'>
    <div className='w-[100%] h-full flex justify-end items-center ml-3 gap-2 bg-white '>
      <div className='font-bold text-black'>
        <button  onClick={handleHome} className='outline outline-2 outline-offset-2 outline-black rounded-md p-1 mr-3'>Logout</button>
      </div>
    </div>
  </div>
  )
}

export default AdminTop
