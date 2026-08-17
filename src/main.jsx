import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { LoginPage } from './components/LoginPage'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter({

})

createRoot(document.getElementById('root')).render(


  <StrictMode>
    <LoginPage />
  </StrictMode>,
)
