import React from 'react'
import './Projects.css';
import project1 from '../Images/project1.png';
import project2 from '../Images/project2.png';
import project3 from '../Images/project3.png';
import project4 from '../Images/project4.png';
import project5 from '../Images/project5.png';

const Projects = () => {
  return (
    <div  id='project' >
      <section className='project section'>
        <div className='cont'>
          <div className='row'>
            <div className='section-title'>
              <h2 >Projects</h2>
              <h4>What I have built</h4>
              <div>user credentials:  <b>email:</b> user@gmail.com  <b>password:</b> User@1</div>
              <div>admin credentials:   (only for the buy and sell application) <b>email:</b> admin@gmail.com  <b>password:</b> admin@1</div>
            </div>
          </div>
          <div className=' project-items'>
            <div className='project-item'>
              <div className='project-item-inner shadow-dark'>
                <div className='project-img'>
                  <img src={project1} alt='Project'/>
                  <div className='overlay'>
                    <div>
                    <h2>A Clone Of StackOverflow</h2>
                    <div className='projectinfo'>This is a clone of Stack Overflow, a popular Q&A website, using the MERN stack. This full-stack web application allows users to post and answer questions, vote on answers, and leave comments. The application was built using MongoDB for the database, Express and Node.js for the server-side code, and React for the client-side code.</div>
                    </div>
                    <div className='projectbtns'>
                      <a href='https://stackoverflow-clonefe.netlify.app' target={'_blank'}><button className='btn btn-outline-light'>Demo</button></a>
                      <a href='https://github.com/Likhith329/stackoverflow-cloneFE' target={'_blank'}><button className='btn btn-outline-light'>FE Code</button></a>
                      <a href='https://github.com/Likhith329/stackoverflow-cloneBE' target={'_blank'}><button className='btn btn-outline-light'>BE Code</button></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='project-item'>
              <div className='project-item-inner shadow-dark'>
                <div className='project-img'>
                <img src={project2} alt='Project'/>
                  <div className='overlay'>
                    <div>
                    <div>
                    <h2>A Chat Application</h2>
                    <div className='projectinfo'>This is a real-time chat application using the MERN stack and Socket.IO. This application allows users to communicate with each other in real-time through text messages. The application was built using MongoDB for the database, Express and Node.js for the server-side code, and React and Socket.IO for the client-side code.</div>
                    </div>
                    <div className='projectbtns'>
                      <a href='https://interactive-one-on-one.netlify.app' target={'_blank'}><button className='btn btn-outline-light'>Demo</button></a>
                      <a href='https://github.com/Likhith329/Interactivechat-frontend.git' target={'_blank'}><button className='btn btn-outline-light'>FE Code</button></a>
                      <a href='https://github.com/Likhith329/Interactivechat-backend.git' target={'_blank'}><button className='btn btn-outline-light'>BE Code</button></a>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='project-item'>
              <div className='project-item-inner shadow-dark'>
                <div className='project-img'>
                  <img src={project3} alt='Project'/>
                  <div className='overlay'>
                    <div>
                    <h2>A Blog Application</h2>
                    <div className='projectinfo'>This is a blog application using the MERN stack. This application allows users to create, post and edit their blog posts, with user authentication implemented for security. The application was built using MongoDB for the database, Express and Node.js for the server-side code, and React for the client-side code.</div>
                    </div>
                    <div className='projectbtns'>
                      <a href='https://asimpleblogapp.netlify.app' target={'_blank'}><button className='btn btn-outline-light' target={'_blank'}>Demo</button></a>
                      <a href='https://github.com/Likhith329/blogappFE' target={'_blank'}><button className='btn btn-outline-light' target={'_blank'}>FE Code</button></a>
                      <a href='https://github.com/Likhith329/blogappBE' target={'_blank'}><button className='btn btn-outline-light' target={'_blank'}>BE Code</button></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='project-item'>
              <div className='project-item-inner shadow-dark'>
                <div className='project-img'>
                  <img src={project4} alt='Project'/>
                  <div className='overlay'>
                    <div>
                    <h2>A Buy and Sell Application</h2>
                    <div className='projectinfo'>This is a simple buy and sell application built using the MERN stack.This application allows users to browse available products, add items to a shopping cart, and buy the product or sell. In summary, the MERN stack application provides a platform for buying and selling products online with a user-friendly interface.</div>
                    </div>
                    <div className='projectbtns'>
                      <a href='https://buyandsellapp.netlify.app' target={'_blank'}><button className='btn btn-outline-light'>Demo</button></a>
                      <a href='https://github.com/Likhith329/buyandsellFE' target={'_blank'}><button className='btn btn-outline-light'>FE Code</button></a>
                      <a href='https://github.com/Likhith329/buyandsellBE' target={'_blank'}><button className='btn btn-outline-light'>BE Code</button></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='project-item p5'>
              <div className='project-item-inner shadow-dark'>
                <div className='project-img'>
                  <img src={project5} alt='Project'/>
                  <div className='overlay'>
                    <div>
                    <h2>A simple sorting visualizer</h2>
                    <div className='projectinfo'>This is a sorting visualizer application made with React JS provides a user-friendly way to visualize the inner workings of sorting algorithms, helping users understand how these algorithms work and how they differ from one another.</div>
                    </div>
                    <div className='projectbtns'>
                      <a href='https://sortingvisualizzer.netlify.app/' target={'_blank'}><button className='btn btn-outline-light'>Demo</button></a>
                      <a href='https://github.com/Likhith329/sortingvisualizer' target={'_blank'}><button className='btn btn-outline-light'>FE Code</button></a>
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

export default Projects