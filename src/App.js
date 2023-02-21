import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  const [show,setShow]=useState('none')
  return (
    <div>
      <div className="App container">
        <Navbar setShow={setShow}/>
        <Home setShow={setShow}/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <div className='uparrow'>
          <a href='#'>
            <i className="bi bi-arrow-up-circle" style={{display:show}} onClick={()=>{setShow('none')}}></i>
            </a>
        </div>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
