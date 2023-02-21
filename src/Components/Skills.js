import React from 'react'
import './Skills.css';
import HTML from '../Images/html.png';
import CSS from '../Images/css.png';
import  JAVASCRIPT from '../Images/javascript.png';
import REACT from '../Images/react.png';
import NODEJS from '../Images/nodejs.jpg';
import EXPRESS from '../Images/express.jpg';
import MYSQL from '../Images/mysql.jpg';
import MONGODB from '../Images/mongodb.jpg';
import BOOTSTRAP from '../Images/bootstrap.jpg';
const Skills = () => {
  return (
    <div  id='skills' >
      <section className='skill section'>
        <div className='cont'>
          <div className='row'>
            <div className='section-title'>
              <h2 >Skills</h2>
              <h4>These are the technologies I've worked with</h4>
            </div>
          </div>
          <div className='row'>
            <div className='skill-content'>
              <div className='row'>
                <div className='skill-item'>
                  <img src={HTML} alt='HTML'/>
                  <div className='skill-name'>HTML</div>
                </div>
              </div>
              <div className='row'>
                <div className='skill-item'>
                  <img src={CSS} alt='CSS'/>
                  <div className='skill-name'>CSS</div>
                </div>
              </div>
              <div className='row'>
                <div className='skill-item'>
                  <img src={JAVASCRIPT} alt='JAVASCRIPT'/>
                  <div className='skill-name'>JavaScript</div>
                </div>
              </div>
              <div className='row'>
                <div className='skill-item'>
                  <img src={REACT} alt='REACT'/>
                  <div className='skill-name'>React JS</div>
                </div>
              </div>
              <div className='row'>
                <div className='skill-item'>
                  <img src={NODEJS} alt='NODEJS'/>
                  <div className='skill-name'>Node JS</div>
                </div>
              </div>
              <div className='row'>
                <div className='skill-item'>
                  <img src={EXPRESS} alt='EXPRESS'/>
                  <div className='skill-name'>Express JS</div>
                </div>
              </div>
              <div className='row'>
                <div className='skill-item'>
                  <img src={MYSQL} alt='MYSQL'/>
                  <div className='skill-name'>MySQL</div>
                </div>
              </div>
              <div className='row'>
                <div className='skill-item'>
                  <img src={MONGODB} alt='MONGODB'/>
                  <div className='skill-name'>MongoDB</div>
                </div>
              </div>
              <div className='row'>
                <div className='skill-item'>
                  <img src={BOOTSTRAP} alt='BOOTSTRAP'/>
                  <div className='skill-name'>Bootstrap</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills