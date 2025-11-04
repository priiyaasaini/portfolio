import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Connect from './components/Connect'

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Connect />
      </main>
    </div>
  )
}
