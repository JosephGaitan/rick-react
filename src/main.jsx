//react router dom utilites
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
//components
import Base from './Base'
//Pages
import Charaters from './pages/Charaters'
//other
import './index.css'
import {loader as loaderGetCharacters} from './pages/Charaters'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Base/>,
    children: [
      {
        path: '/Characters',
        element: <Charaters/>,
        loader: loaderGetCharacters

      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
