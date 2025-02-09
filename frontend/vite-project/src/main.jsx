import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import './index.css'
// import Index from './pages/index.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/signup.jsx'
import Home from './pages/home.jsx'
import Index from './pages/index.jsx'
import BuyProduct from './pages/buyProduct.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='main'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='e-commerce/home' element={<Home />} />
          <Route path='e-commerce/sign-up' element={<Signup />} />
          <Route path='e-commerce/log-in' element={<Login />} />
          <Route path='e-commerce/buy-product/:id' element={<BuyProduct />} />
        </Routes>
      </BrowserRouter>
    </div>   
  </StrictMode>
)
