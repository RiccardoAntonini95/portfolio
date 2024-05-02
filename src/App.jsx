import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/scss/App.scss'
import NavBar from './components/navbar/NavBar'
import Hero from './components/hero/Hero'

const App = () => {
  return (
    <div>
      <section id='Homepage'>
        <NavBar />
        <Hero />
      </section>
      <section id='About'>About</section>
      <section id='Portfolio'>Projects</section>
      <section id='Contact'>Contact</section>
      <section></section>
    </div>
  )
}

export default App
