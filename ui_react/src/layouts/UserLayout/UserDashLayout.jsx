import React from 'react'
import UserSide from '../../components/User/UserSide'
import UserTop from '../../components/User/UserTop'
import { Outlet } from 'react-router-dom'
function UserDashLayout() {
  return (
    <div className='m-0 p-0 flex flex-row h-[100vh] w-[100vw] overflow-x-hidden'>
    <UserSide />
    <div className=''>
        <UserTop />
        <div className='w-[20vw] h-[95vh] flex flex-col p-2 gap-4 '>
            <Outlet />
        </div>
    </div>
</div>
  )
}

export default UserDashLayout
