import React, { Suspense,lazy } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
const Contact= lazy(()=>import('./pages/Contact'))
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import WebLayout from './layouts/WebLayout'
import Loader from './components/Public/Loader'
import Forgot from './pages/Auth/Forgot'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainLayout from './layouts/MainLayout'
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
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/forgot' element={<Forgot/>}/>
       </Route>
       <Route element={<MainLayout/>}>
       <Route path='/' element={<Home/>}/>
       </Route>
       </Routes>
    </Suspense>
  </BrowserRouter>
</>
  )
}

export default App
