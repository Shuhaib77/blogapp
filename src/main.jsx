import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@material-tailwind/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  
    <ThemeProvider>
      <BrowserRouter>

    <App />
    </BrowserRouter>
    </ThemeProvider>
  

)
