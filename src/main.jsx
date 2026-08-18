import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { AuthProvider } from './utils/AuthProvider'

//components
import { LoginPage } from './components/LoginPage'
import { AuthResult } from './components/AuthResult'
import { Dashboard } from './components/DashBoard'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>
  },
  {
    path: "/auth-success",
    element: <AuthResult/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  }
])
createRoot(document.getElementById('root')).render(


  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
