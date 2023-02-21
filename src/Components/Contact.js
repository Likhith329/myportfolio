import React from 'react'
import './Contact.css';
const Contact = () => {
  return (
    <div  id='contact' >
      <section className='contact section'>
        <div className='cont'>
        <div className='row'>
            <div className='section-title'>
              <h2 >Contact Me</h2>
            </div>
        </div>
        <div className=' contact-items'>
          <div className='contact-info-item'>
            <div className='contact-icon'><i className="bi bi-telephone-fill"></i></div>
            <h4>Call Me</h4>
            <p>+91 6303969607</p>
          </div>
          <div className='contact-info-item'>
            <div className='contact-icon'><i className="bi bi-envelope-fill"></i></div>
            <h4>Email</h4>
            <p>likhithmattapalli@gmail.com</p>
          </div>
        </div>
        <h3 className='contact-title'>SEND ME AN EMAIL</h3>
        <div className='rowb'>
          <form action='https://formsubmit.co/eb0f337cfa03c7164817dded1af45b7a' method='POST'>
          <div className='contact-form'>
            <div className='row'>
              <div className='form-item col-6'>
                <div className='form-group'>
                  <input type={'text'} className='form-control' name='name' placeholder='Name' />
                </div>
              </div>
              <div className='form-item col-6'>
                <div className='form-group'>
                  <input type={'email'} className='form-control' name='email' placeholder='Email' />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='form-item col-12'>
                  <div className='form-group'>
                    <input type={'text'} className='form-control' name='subject' placeholder='Subject' />
                  </div>
              </div>
            </div>
            <div className='row'>
              <div className='form-item col-12'>
                  <div className='form-group'>
                    <textarea className='form-control' id='' name='message' placeholder='Message'/>
                  </div>
              </div>
            </div>
            <div className='row'>
              <div className='form-item col-12'>
                <button className='btn btn-warning' type='submit'>Send Email</button>
              </div>
            </div> 
          </div>
          </form>
        </div>
        </div>
      </section>
    </div>
  )
}

export default Contact