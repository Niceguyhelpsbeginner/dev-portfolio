import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Awards from './components/Awards'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Hero />
      <About />
      <Awards />
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}

export default App

