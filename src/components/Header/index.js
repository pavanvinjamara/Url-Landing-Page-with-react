import React from 'react'
import './index.css'
import Logoicon from '../../assets/images/logo.svg';
import { useState } from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faBars,
  faClose
} from '@fortawesome/free-solid-svg-icons'

const Header= () => {
  const [showNav, setShowNav] = useState(false);
  const handleNav =() =>{
    setShowNav(!showNav);
  }
  
  return (
    <div className='header'>
        <img src={Logoicon} alt='navlog' className='navlogo'/>
        <nav className={showNav ?'nav-links-mobile':'navbar'}>
        
        
          <ul className='list1'>
            <li>
              Features
            </li>
            <li>
              Pricing
            </li>
            <li>
              Resources
            </li>
          </ul>
          <ul className='list2'>
            <li>
              Login
            </li>
              <button className='hover-btn'>Sign Up</button>
          </ul>
        </nav>
        <div className='menu-icon' onClick={handleNav}>
          {showNav? <FontAwesomeIcon icon={faClose}
            onClick={() => setShowNav(false)}
            size="2x"
            className='close-icon'
            />: <FontAwesomeIcon
            onClick={() => setShowNav(true)}
            icon={faBars} 
            size="2x"
            className='hamlogo'/>}
        </div>
    </div>
  )
}

export default Header