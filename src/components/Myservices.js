import React from 'react'
import './Myservices.css'

function Myservices() {
  return (
    <>
    <div className='myservices'>
     <div className='myservices-items'>
      <h1 className='myservices-Title'>My <span>Services</span></h1>
      <p className='myservices-content'>There are many variations of passages ofLorem Ipsum <br/>
available, but the majority havesuffered alteration in some <br/>
form, by injected humour,</p>
    <div className='cards'>
      <div>
        <h1 className='icon'><i class="bi bi-megaphone"></i></h1>
          <h1 className='card-heading'>Digital Marketing</h1>
          <p className='card-content'>"There are many variations of passages ofLorem Ipsumavailable, but the majority havesuffered alteration in some </p>
       </div> 
       <div>
       <h1 className='icon'>
        <i class="bi bi-window-sidebar"></i>
        </h1>
          <h1 className='card-heading'>Web Devlopment</h1>
          <p className='card-content'>There are many variations of passages ofLorem Ipsumavailable, but the majority havesuffered alteration in some </p>
       </div> 
       <div>
       <h1 className='icon'><i class="bi bi-diagram-2"></i></h1>
          <h1 lassName='card-heading'>Creative Graphic Design</h1>
          <p className='card-content'>"here are many variations of passages ofLorem Ipsumavailable, but the majority havesuffered alteration in some </p>
          </div>
       </div> 
     </div>
    </div>
    </>
  )
}

export default Myservices