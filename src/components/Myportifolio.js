import React from 'react'
import './Myportifolio.css'
import Imagemain from '../images/pic1.jpeg'
import Image1 from '../images/pic2.jpeg'
import Image2 from '../images/pic3.jpeg'
import Image3 from '../images/pic4.jpeg'
import Image4 from '../images/pic5.jpeg'


function Myportifolio() {
  return (
    <div className='myportifolio-container'>
     <div className='myportifolio-items'>
        <h1 className='myportifolio-Title'>My <span>Portifolio</span></h1>
        <p className='myportifolio-content'>There are many variations of passages ofLorem Ipsum <br/> available, but the majority havesuffered alteration in some <br/>form, by injected humour,</p>
      <div className='pic-main'>
      <div class="row">
      <div class="col-lg-6">
        <img src={Imagemain} class="main-img" alt="BigImage"/>
      </div>
      <div class="col-lg-6 custom-container">
        <div class="row">
          <div class="col-lg-6">
            <img src={Image1} class="custom-img" alt="pic1"/>
          </div>
          <div class="col-lg-6">
            <img src={Image2} class="custom-img" alt="pic2"/>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <img src={Image3} class="custom-img" alt="pic 3"/>
          </div>
          <div class="col-lg-6">
            <img src={Image4} class="custom-img" alt="pic 4"/>
          </div>
        </div>
      </div>
    </div>
      {/* <img src={Imagemain} alt='mainpic' className='mainpic'/>
    </div>
    <div className='pic-frame'>
      <img src={Image1} alt='pic1' className='sub-pic'/>
      <img src={Image2} alt='pic2' className='sub-pic'/>
      <img src={Image3} alt='pic3' className='sub-pic'/>
      <img src={Image4} alt='pic4'className='sub-pic'/> */}
    </div>
</div>
</div>
  )
}

export default Myportifolio