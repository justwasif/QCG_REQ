import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './component/Signup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  const router=createBrowserRouter([
    {path:"/",element:<Home/>,children:[
      {path:"/signup",element:<Signup/>}
    ]}
  ])
  return (
   <RouterProvider router={router}/>
  );
}
