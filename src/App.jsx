import React, { useState } from 'react'

import Awards from './components/Awards'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Sidebar from './components/Sidebar'
import Skills from './components/Skills'

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleOnClick = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleOnClose = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <Sidebar isSidebarOpen={isSidebarOpen} handleOnClose={handleOnClose} />
      <Navbar handleOnClick={handleOnClick} />
      <Home />
      <Skills />
      <Portfolio />
      <Education />
      <Awards />
      <Contact />
      <Footer />
    </>
  )
}

export default App
