import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuthCard from './components/AuthCard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import Web from './pages/web/Web1';
import Designe from './pages/Design';
import Core from './pages/Core';
import Web1 from './pages/web/Web1';
import Web2 from './pages/web/Web2';
import Web3 from './pages/web/Web3';
import Web4 from './pages/web/Web4';
function App() {
  const router = createBrowserRouter([
  { path: "/home", element: <Home /> },
  { path: "/", element: <AuthCard /> },

  {path:"/design",element:<Designe/>},
  {path:"/core",element:<Core/>},
  {path:"/web1",element:<Web1/>},
  {path:"/web2",element:<Web2/>},
  {path:"/web3",element:<Web3/>},
  // {path:"/web2",element:<Web3/>},
  {path:"/web4",element:<Web4/>},


  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App
