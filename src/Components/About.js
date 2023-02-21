import React from 'react'
import './About.css'
const About = () => {
  return (
    <div  id='about'>
      <section className='about section'>
        <div className='cont'>
          <div className='row'>
            <div className='section-title'>
              <h2>About Me</h2>
            </div>
          </div>
          <div className='row'>
            <div className='about-content'>
              <div className='row'>
                <div className='about-text'>
                  <p>
                  Hi, I'm Likhith kumar, a recent graduate with a passion for coding and developing web applications. My foundation in full-stack development, combined with my eagerness to learn and stay up-to-date with the latest technologies, has equipped me with the skills and knowledge to deliver end-to-end solutions that meet the needs of users and drive business results.
                   Whether it's developing a new website or updating an existing one, I have the skills and dedication to bring your digital vision to life.
                  </p>
                </div>
              </div>
              <div className='row'>
                <div className='personal-info'>
                 <div className='row'>
                   <div className='info-item'>
                     <p>Birthday: <span>27th June 2000</span></p>
                   </div>
                   <div className='info-item'>
                     <p>Age: <span>22</span></p>
                   </div>
                   <div className='info-item'>
                     <p>Email: <span>likhithmattapalli@gmail.com</span></p>
                   </div>
                   <div className='info-item'>
                     <p>Degree: <span>Mechanical Engineering (Regular)</span></p>
                   </div>
                   <div className='info-item'>
                     <p>Phone: <span>+91 6303969607</span></p>
                   </div>
                   <div className='info-item'>
                     <p>City: <span>Khammam</span></p>
                   </div>
                 </div>
                 <div className='row'>
                  <a  className='btn btn-primary resbtn' style={{width:'min-content'}} href='https://drive.google.com/file/d/1Dq9Ecg21JRga6e9sPKhVKB7A_0Wx8oyF/view?usp=sharing' target={'_blank'}>Resume</a>
                 </div>
                </div>
              </div>
              <div className='row'>
                <div className='education'>
                  <h3 className='title'>Education</h3>
                  <div className='timeline-box'>
                    <div className='timeline shadow-dark'>
                      <div className='timeline-item'>
                        <div className='circle-dot'></div>
                        <h3 className='timeline-date'>
                        <i className="bi bi-calendar-fill"></i> 2018 - 2022
                        </h3>
                        <h4 className='timeline-title'>B.tech, Mechanical Engineering (7.78 GPA)</h4>
                        <p className='timeline-text'>Jawaharlal Nehru Technological University Hyderabad (JNTUH-UCEH),Kukatpally,Hyderabad.</p>
                      </div>
                      <div className='timeline-item'>
                        <div className='circle-dot'></div>
                        <h3 className='timeline-date'>
                        <i className="bi bi-calendar-fill"></i> 2016 - 2018
                        </h3>
                        <h4 className='timeline-title'>Intermediate - Mathematics,Physics and Chemistry (977 out of 1000 marks)</h4>
                        <p className='timeline-text'>Sri Chaitanya Arts & Science Junior College,khanapuram Haveli,Khammam.</p>
                      </div>
                      <div className='timeline-item'>
                        <div className='circle-dot'></div>
                        <h3 className='timeline-date'>
                        <i className="bi bi-calendar-fill"></i> 2015 - 2016
                        </h3>
                        <h4 className='timeline-title'>10th Standard - Central Board Of Secondary Education (10 GPA)</h4>
                        <p className='timeline-text'>Gorkey Public School,khanapuram Haveli,Khammam.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About