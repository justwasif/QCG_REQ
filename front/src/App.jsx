
import './App.css'
import AuthCard from './components/AuthCard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';

import Designe from './pages/Design';
import Core from './pages/Core';
import Web1 from './pages/web/Web1';
import Web2 from './pages/web/Web2';
import Web3 from './pages/web/Web3';
import Web4 from './pages/web/Web4';
import { TotalWeb } from './components/TotalWeb'
import WebResult from './pages/web/WebResult'
import No1 from './pages/design/No1'
import No2 from './pages/design/No2'
import No3 from './pages/design/No3'
import No4 from './pages/design/No4'
import Cno1 from './pages/core/Cno1'
import Cno2 from './pages/core/Cno2'
import Cno3 from './pages/core/Cno3'
import Cno4 from './pages/core/Cno4'
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
  {path:"/result",element:<WebResult/>},
  {path:"/design1",element:<No1/>},
  {path:"/design2",element:<No2/>},
  {path:"/design3",element:<No3/>},
  {path:"/design4",element:<No4/>},
  {path:"core1",element:<Cno1/>},
  {path:"core2",element:<Cno2/>},
  {path:"core3",element:<Cno3/>},
  {path:"core4",element:<Cno4/>},


  ])
  return (
    <TotalWeb>
      <RouterProvider router={router}/>
    </TotalWeb>
    
  );
}

export default App
