import React from 'react'

import Awards from './components/Awards'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'

const App = () => (
  <>
    <Navbar />
    <Home />
    <Skills />
    <Portfolio />
    <Education />
    <Awards />
    <Contact />
    <Footer />
  </>
)

export default App
