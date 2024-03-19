import React from 'react'

import { Outlet } from 'react-router-dom'
import AdminSide from '../../components/Admin/AdminSide'
import AdminTop from '../../components/Admin/AdminTop'
function AdminDashLayout() {
  return (
    <div className='m-0 p-0 flex flex-row h-[100vh] w-[100vw] overflow-x-hidden'>
    <AdminSide/>
    <div className=''>
        <AdminTop />
        <div className='w-[20vw] h-[95vh] flex flex-col p-2 gap-4 '>
            <Outlet />
        </div>
    </div>
</div>
  )
}

export default AdminDashLayout
