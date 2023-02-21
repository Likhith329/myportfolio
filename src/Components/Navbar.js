import React, { useState } from 'react'
import { Link } from 'react-scroll';
import './Navbar.css';
const Navbar = ({setShow}) => {
    const [active,setActive]=useState('navbtns')
    const[toggler,setToggler]=useState('nav-toggler')
    const handletoggle=()=>{
        active=='navbtns'?setActive('navbtns nav-active'):setActive('navbtns')
        toggler=='nav-toggler'?setToggler('nav-toggler toggle'):setToggler('nav-toggler')
    }
  return (
    <div className='navibar fixed-top'>
        <div className='brand'>LIKHITH</div>
        <div className={active} >
            <div><Link to='home' spy={true} smooth={true} offset={-50} duration={50} className='nb' onClick={()=>{
                handletoggle()
                }}>Home</Link></div>
            <div><Link to='about' className='nb' onClick={()=>{
                setShow('')
                handletoggle()
                }}>About</Link></div>
            <div><Link to='skills' className='nb' onClick={()=>{
                setShow('')
                handletoggle()
                }}>Skills</Link></div>
            <div><Link to='project' className='nb' onClick={()=>{
                setShow('')
                handletoggle()
                }}>Projects</Link></div>
            <div><Link to='contact' className='nb' onClick={()=>{
                setShow('')
                handletoggle()
                }}>Contact</Link></div>
        </div>
        <div className={toggler} onClick={handletoggle}>
            <div className='l1'></div>
            <div className='l2'></div>
            <div className='l3'></div>
        </div>
    </div>
  )
}

export default Navbar