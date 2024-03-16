import React, { Suspense,lazy } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
const Contact= lazy(()=>import('./pages/Contact'))
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import WebLayout from './layouts/WebLayout'
import Navbar from './components/Public/Navbar'
const App = () => {
  return (
<>
  <BrowserRouter>
  <Suspense fallback='Loading...'>
    <Routes>
      <Route element={<WebLayout/>}>
       <Route path='/' element={<Home/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/nav' element={<Navbar/>}/>
       </Route>
       </Routes>
    </Suspense>
  </BrowserRouter>
</>
  )
}

export default App
