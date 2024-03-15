import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import WebLayout from './layouts/WebLayout'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<WebLayout/>}/>
     <Route path='/' element={<Home/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
