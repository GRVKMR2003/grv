import React from 'react'
import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Qualification from './components/qualification/Qualification'
import ScrollUp from './components/scrollup/ScrollUp'
import Skills from './components/skills/Skills'
import Work from './components/work/Work'

const App = () => {
  return (
    <div>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Work />
        
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </div>
  )
}

export default App