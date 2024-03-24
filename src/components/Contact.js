import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact' id='contact'>
        <div className='contact-container'>
        <h1 className='contact-Title'>Contact <span>Me</span></h1>
        <p className='contact-content'>There are many variations of passages ofLorem Ipsum available, but the majority havesuffered alteration in some form, by injected humour,</p>
        <div className='contact-inner'>
          <div className='display-info'>
        <p className='contact-address'><span>Address _ </span> #103 5th Cross Nanjappa Garden Babusapalaya Bangalore - 560043 </p>
            <p className='contact-number'><span>Phone _</span> +91 9902610692</p>
            <p className='contact-email'><span>E mail _ </span>mridulpramod8@gmail.com</p>
            <p className='contact-website'><span>Website _ </span>www.abc.xyz.com</p>
            </div>
       <div className='form'>
        <input type='text' className='contact-input' placeholder='Name'></input>
        <input type='message' className='contact-input-message' placeholder='Message'></input>
        <button type='button' class="btn btn-warning">Contact Us</button>
        </div>
    </div>
    </div>
  </div>
  )
}

export default Contact