import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Awards from './components/Awards'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Experience from './components/Experience'
import LanguageSwitcher from './components/LanguageSwitcher'

function App() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
			<LanguageSwitcher />
			<Hero />
			<About />
			<Projects />
			<Awards />
			<Experience />
			<Skills />
			<Footer />
		</div>
	)
}

export default App

