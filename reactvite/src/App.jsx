import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './component/ICard'
import pic from './images/student.webp'
import Gallery from './component/Gallery'
import Reacthook from './component/Reacthook'
import Imagemanipulation from './component/Imagemanipulation'
import Useeffect from './component/Useeffect'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Login from './component/Login'
import Registration from './component/Registration'
import Dashboard from './component/Dashboard'
function App() {
  const[data,setData]=useState();

  return ( 
      <div>
        <BrowserRouter>
        <Routes>
          <Route path= '/' element={<Home/>}/>
          <Route path= '/login' element={<Login/>}/>
          <Route path= '/registration' element={<Registration regdata={data}/>}/>
          <Route path= '/dashboard' element={<Dashboard/>}/>

        </Routes>
        </BrowserRouter>
    {JSON.stringify(data)}
      
    </div>
      )
}

export default App