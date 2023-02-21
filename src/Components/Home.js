import React from 'react'
import { Link } from 'react-scroll'
import TypewriterComponent from 'typewriter-effect'
import './Home.css'
const Home = ({setShow}) => {
  return (
      <div  id='home'  className='homecont'>
        <div className='icons-container'>
          <div className='icons'>
            <li><a href='https://github.com/Likhith329' target={'_blank'}><i className='bi bi-github text-secondary' style={{fontSize:'25px'}}></i></a></li>
            <li><a href='https://www.linkedin.com/in/likhith-mattapalli-b2a698219' target={'_blank'}><i className='bi bi-linkedin text-secondary' style={{fontSize:'25px'}}></i></a></li>
            <li><a href='#contact' ><i className='bi bi-envelope text-secondary' style={{fontSize:'25px'}}></i></a></li>
          </div>
        </div>
        <div className='email-container'>
          <p style={{margin:'0'}}>likhithmattapalli@gmail.com</p>
        </div>
        <main>
          <p className='hi_name'>Hi, my name is</p>
          <h1 >Likhith kumar Mattapalli</h1>
          <h2>
            <TypewriterComponent
            options={{
              autoStart:true,
              loop:true,
              delay:50,
              strings:["I build things for the web.","I am a full-stack developer."]
            }}            
            />
          </h2>
          <p className='detail'>
            I'm a recent graduate and Full-Stack Developer with a strong  foundation in both front-end and back-end development. Eager to apply my skills and make a positive impact in the industry.
          </p>
          <Link to='about' spy={true} smooth={true} offset={-50} duration={50}><button className='bg-transparent' onClick={()=>{setShow('')}} >Check out More</button></Link>
        </main>
      </div>
  )
}

export default Home