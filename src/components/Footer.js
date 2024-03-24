import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='footer-items'>
            <h1 className='footer-title'>About Me.</h1>
            <p className='footer-content'>There are many variations of passages ofLorem Ipsumavailable, but the majority havesuffered alteration in some form</p>
            <div className='footer-icons'>
            <h3>
            <a href='#facebook' className='icon1'><i class="bi bi-facebook"/></a>
            <a href='#twitter' className='icon1'><i class="bi bi-twitter"/></a>
            <a href='#linkedin' className='icon'><i class="bi bi-linkedin"/></a>
            <a href='#instagram' className='icon1'><i class="bi bi-instagram"/></a>
            <a href='#youtube' className='icon1'><i class="bi bi-youtube"/></a>
            </h3>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer