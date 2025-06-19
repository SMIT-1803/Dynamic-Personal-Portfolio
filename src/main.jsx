import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Blog, Pokedex, Portfolio, SpotifyClone} from "./ProjectPages/index.js"
import Container from './components/Container.jsx'
// import ScrollToHashElement from './components/ScrollToHashElement.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
         path:"",
        element:<Container/>
      },
      {
        path:"/blog",
        element:<Blog/>
      },
      {
        path:"/pokedex",
        element:<Pokedex/>
      },
      {
        path:"/portfolio",
        element:<Portfolio/>
      },
      {
        path:"/spotifyClone",
        element:<SpotifyClone/>
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
   
  </StrictMode>,
)
