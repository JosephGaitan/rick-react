//react router dom utilites
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
//components
import Base from './Base'
import ErrorText from './components/ErrorText'
//Pages
import Charaters from './pages/Charaters'
import Location from './pages/Location'
import Episodes from './pages/Episodes'
import Statistics from './pages/Statistics'
//other
import './index.css'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Base/>,
    children: [
      {
        path: '/',
        element: <Charaters/>,
        errorElement: <ErrorText />
      },
      {
        path : '/location',
        element: <Location/>,
        errorElement: <ErrorText />
      },
      {
        path : '/episodes',
        element : <Episodes />,
        errorElement: <ErrorText />
      },
      {
        path: '/stats',
        element: <Statistics/>,
        errorElement: <ErrorText/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
