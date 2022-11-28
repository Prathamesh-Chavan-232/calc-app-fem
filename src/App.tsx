import { useState } from 'react'

import './styles/App.css'

import Footer from './components/Footer'
import Numpad from './components/Numpad'
import TitleBar from './components/TitleBar'
import ResWindow from './components/ResWindow'

function App() {

  return (
    <div className="calc-app">
      <div className='container'>
        <TitleBar/>
        <ResWindow/> 
        <Numpad/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
