import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,

  } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'


  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children:[
        {
          path: '/',
          element: <Home/>
        },
        {
          path:'about',
          element: <About/>
        },
        {
          path: 'service',
          element: <Services/>
        },
        {
          path: 'contact',
          element: <Contact/>
        }
      ]
      },
     

  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
