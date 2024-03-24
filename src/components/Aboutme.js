import React from 'react'
import Image from '../images/Aboutme.png'
import './Aboutme.css'

function Aboutme() {
  return (
    <div className='aboutme'>
            <div className='aboutme-container'>
               <img className='image1' src={Image} alt='mridul'/>
               <div className='aboutme-items'>
                <h1 className='aboutme-title'>About<span>Me</span></h1>
                <p className='aboutme-content'>There are many variations of passages ofLorem Ipsum <br/>available, but the majority havesuffered alteration in some <br/>form, by injected humour</p>
                <p className='aboutme-content'>Passages ofLorem Ipsumavailable, but the majority havesuffered <br/> alteration in some form, by injected humour</p>
                <button type='button' class="btn btn-warning">Contact Us</button>
            </div>
        </div>
    </div>
  )
}

export default Aboutme