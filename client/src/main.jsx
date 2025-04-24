import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Home from './pages/home.jsx'
import Login from './pages/Login.jsx'
import Nest from './pages/Nest.jsx'
import Grocery from './pages/Grocery.jsx'
import Clothings from './pages/Clothings.jsx'
import Electronics from './pages/Electronics.jsx'
import SignUp from './pages/Signup.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Home />
    <SignUp />
    <Login />
    <Nest />
    <Grocery />
    <Clothings />
    <Electronics /> */}

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/grocery' element={<Grocery />} />
        <Route path='/nest' element={<Nest />} />
        <Route path='/clothings' element={<Clothings />} />
        <Route path='/electronics' element={<Electronics />} />
          
      </Routes>
    </BrowserRouter>
    

  </StrictMode>,
)
