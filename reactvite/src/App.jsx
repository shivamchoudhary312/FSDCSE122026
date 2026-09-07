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
function App() {

  return (
    <div>
      {/* <Gallery/> */}
      {/* <Reacthook/> */}
      <Imagemanipulation/>
    </div>
    
  )
}

export default App