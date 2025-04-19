import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Car from './car.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Car />
  </StrictMode>,
)
