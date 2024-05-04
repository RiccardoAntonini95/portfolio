import { useState } from 'react'
import './assets/scss/App.scss'
import NavBar from './components/navbar/NavBar'
import Hero from './components/hero/Hero'
import Portfolio from './components/portfolio/Portfolio'
import About from './components/about/About'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <div>
      <section id='Homepage'>
        <NavBar />
        <Hero />
      </section>
      <section id='Portfolio'>
       <Portfolio /> 
      </section>
      <section id='About'>
        <About />
      </section>
      <section id='Contact'>
        <Contact />
      </section>
    </div>
  )
}

export default App
