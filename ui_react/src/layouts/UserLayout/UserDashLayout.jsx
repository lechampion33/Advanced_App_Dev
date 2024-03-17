import React from 'react'
import UserSide from '../../components/User/UserSide'
import { Outlet } from 'react-router-dom'

function UserDashLayout() {
  return (
    <>
   <div className='flex h-screen bg-gray-200'>
     <UserSide/>
     <div>
        <Outlet/>
     </div>
     </div>
   </>
  )
}

export default UserDashLayout
