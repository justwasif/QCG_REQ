import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuthCard from './components/AuthCard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
function App() {
  const router = createBrowserRouter([
  { path: "/home", element: <Home /> },
  { path: "/", element: <AuthCard /> }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App
