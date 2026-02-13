import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuthCard from './components/AuthCard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Web from './pages/Web'
import Designe from './pages/Design'
import Core from './pages/Core'
function App() {
  const router = createBrowserRouter([
  { path: "/home", element: <Home /> },
  { path: "/", element: <AuthCard /> },
  {path:"/web",element:<Web/>},
  {path:"/design",element:<Designe/>},
  {path:"/core",element:<Core/>},
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App
