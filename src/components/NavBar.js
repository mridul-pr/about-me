import React from 'react';
import {useRef} from "react";
import './NavBar.css'


function Navbar() {
    return (
      <>
      <nav className='navbar'>
        <div className='nav'>
        <div className='navbar-container'>
            <a href='#Logo' className='website-Logo'>About<span>ME.</span></a>        
        <div className='menu-items'>
            <ul className='nav-contents'>
                <li className='nav-item'>
                  <a href='#Home'>HOME</a>
                </li>
                <li className='nav-item'>
                <a href='#About'>ABOUT</a>
                </li>
                <li className='nav-item'>
                <a href='#Service'>SERVICE</a>
                </li>
                <li className='nav-item'>
                <a href='#Portfolio'>PORTFOLIO</a>
                </li>
                <li className='nav-item'>
                <a href='#Resume'>RESUME</a>
                </li>
                <li className='nav-item'>
                <a href='#Blog'>BLOG</a>
                </li>
                <li className='nav-item'>
                <a href='#Contact'>CONTACT</a>
                </li>
            </ul>
            </div>
        </div>
        </div>
    </nav>
      </>
    );
  }
  export default Navbar;