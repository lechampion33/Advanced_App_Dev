import React, { Suspense,lazy } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
const Contact= lazy(()=>import('./pages/Contact'))
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import WebLayout from './layouts/WebLayout'
import UserDash from './pages/User/UserDash.jsx'
import Loader from './components/Public/Loader'
import Forgot from './pages/Auth/Forgot'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainLayout from './layouts/MainLayout'
import UserDashLayout from './layouts/UserLayout/UserDashLayout'
import UserCourses from './pages/User/UserCourses.jsx'
import UserFavs from './pages/User/UserFavs.jsx'
import UserSub from './pages/User/UserSub.jsx'
import AdminDashLayout from './layouts/AdminLayout/AdminDashLayout'
import AdminDash from './pages/Admin/AdminDash.jsx'
import AdminBoard from './pages/Admin/AdminBoard.jsx'
import AdminCourses from './pages/Admin/AdminCourses.jsx'
import AdminPayment from './pages/Admin/AdminPayment.jsx'
import AdminMails from './pages/Admin/AdminMails.jsx'
import TermsLayout from './layouts/TermsLayout.jsx'
import Terms from './pages/Terms.jsx'
import Policy from './pages/Policy.jsx'
import Help from './pages/Help.jsx'
import Explore from './pages/Explore.jsx'
import ExploreLayout from './layouts/ExploreLayout.jsx'
const App = () => {
  const toastStyle = {
    background: '#333', 
    color: '#fff',
  };
  return (
<>
  <BrowserRouter>
  <ToastContainer
        toastStyle={toastStyle} 
        bodyClassName="dark-theme"
      />
  <Suspense fallback={<Loader/>}>
    <Routes>
      <Route element={<WebLayout/>}>
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/forgot' element={<Forgot/>}/>
       </Route>
       <Route element={<MainLayout/>}>
       <Route path='/' element={<Home/>}/>
       </Route>
       <Route element={<ExploreLayout/>}>
       <Route path='/explore' element={<Explore/>}/>
       </Route>
       <Route element={<TermsLayout/>}>
       <Route path='/terms' element={<Terms/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/policy' element={<Policy/>}/>
       <Route path='/help' element={<Help/>}/>
       </Route>
       <Route element={<UserDashLayout/>}>
       <Route path='/userdash' element={<UserDash/>}/>
       <Route path='/usercourse' element={<UserCourses/>}/>
       <Route path='/favs' element={<UserFavs/>}/>
       <Route path='/sub' element={<UserSub/>}/>
       </Route>
       <Route element={<AdminDashLayout/>}>
       <Route path='/users' element={<AdminDash/>}/>
       <Route path='/board' element={<AdminBoard/>}/>
       <Route path='/adminc' element={<AdminCourses/>}/>
       <Route path='/adminpayment' element={<AdminPayment/>}/>
       <Route path='/adminmails' element={<AdminMails/>}/>
       </Route>
       </Routes>
    </Suspense>
  </BrowserRouter>
</>
  )
}

export default App
