import React from 'react'
import './index.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {
    faFacebook,
    faInstagram,
    faTwitter,
    faPinterest
  } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className='footer-container'>
        <h1>Shortly</h1>
        <ul className='footer-ul'>
            <li><h3> Features</h3></li>
            <li> Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
        </ul>
        <ul className='footer-ul'>
            <li><h3> Resources</h3></li>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
        </ul>
        <ul className='footer-ul'>
            <li><h3>Company</h3></li>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li> Contact</li>
        </ul>
        <div >
        <FontAwesomeIcon icon={faFacebook} className='icons-brsnds'/>
        <FontAwesomeIcon icon={faTwitter} className='icons-brsnds'/>
        <FontAwesomeIcon icon={faPinterest} className='icons-brsnds'/>
        <FontAwesomeIcon icon={faInstagram} className='icons-brsnds'/>
        </div>
    </div>
  )
}

export default Footer