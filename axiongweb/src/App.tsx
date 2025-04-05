import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Resume from './components/Resume';
import { Fragment } from 'react'
import Contact from './components/Contact';
import Projects from './components/Projects'
import Algorithms from './components/Algorithms';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/algorithms" element={<Algorithms />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
