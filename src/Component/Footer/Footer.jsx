import React from 'react'
import './Footer.css'
import logo from '../assets/Favicon.png'
import { Link } from 'react-router-dom'
import instagram from '../assets/instagram.png'
import whatsapp from '../assets/whatsapp.png'
import youtube from '../assets/youtube.png'

function Footer() {
  return (
    <div className='footer'>
      <div className="logo2">
        <img src={logo} alt="" />
        <h1>Cars Wave</h1>
      </div>
 
      <div className="links">
        <Link>Company</Link>
        <Link>Cars</Link>
        <Link>Offices</Link>
        <Link>About</Link>
        <Link>Contact</Link>
      </div>

      <div className="social-links">
        <Link><img src={instagram} alt="" /></Link>
        <Link><img src={whatsapp} alt="" /></Link>
        <Link><img src={youtube} alt="" /></Link>
      </div>
      <hr />

      <div className="copyright">
        <p>Copyright @ 2024 by Dinesh. All Rights Reserved. </p>
      </div>
    </div>
  )
}

export default Footer