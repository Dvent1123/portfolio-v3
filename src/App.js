import React from 'react'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Projects from './components/Projects/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Banner />
      <NavBar />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
