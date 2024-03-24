import React from 'react'
import './HeroSection.css'
import Image from '../images/heroSection.png'

function HeroSection() {
  return (
    <>
    <div className='hero-section'>
          <div className='hero-section-content-box'>
            <div className='hero-section-container'>
              <p className='section-title'>Hello,Welcome </p>
              <h1 className='hero-section-title'>I M MRIDUL PRAMOD</h1>
              <p className='hero-section-container'>There are many variations of passages ofLorem Ipsum <br/>
 available, but the majority havesuffered alteration in some <br/>
form, by injected humour</p>
            <button type='button' class="btn btn-warning">Contact Us</button>
            </div>
            <img className='hero-image' src={Image} alt='mridul'/>
          </div>
        </div>
    </>
  );
}

export default HeroSection