import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//Auth
import { AuthProvider } from './components/auth/AuthProvider'
import { AuthResult } from './components/AuthResult'

//App
import App from './App'
import ErrorElement from './ErrorElement'


//components
import { LoginPage } from './components/LoginPage'
import { Dashboard } from './components/DashBoard'
import { RootRedirect } from './components/RootRedirect'

import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorElement/>,
    children: [
      {
        index: true,
        element: <RootRedirect/>,
      },
      {
        path: "login",
        element: <LoginPage/>
      },
      {
        path: "auth-success",
        element: <AuthResult/>
      },
      {
        path: "dashboard",
        element: <Dashboard/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
