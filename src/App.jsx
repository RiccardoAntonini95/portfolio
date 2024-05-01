import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/scss/App.scss'
import NavBar from './components/navbar/NavBar'

const App = () => {
  return (
    <div>
      <section>
        <NavBar />
      </section>
      <section>Parallax</section>
      <section id='services'>Services</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id='contact'>Contact</section>
      <section></section>
    </div>
  )
}

export default App
