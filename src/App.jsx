import { useState } from 'react'


import './App.css'

import Sidebar from './component/sidebar/sidebar'
import Header from './component/header/header'
import Home from './component/home/home'
function App() {
 

  return (
    <div className='container'>
      <Sidebar />
      <Header/>
      <Home/>
    </div>
  )
}

export default App
