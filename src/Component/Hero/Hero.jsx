import React, { useEffect, useRef } from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { gsap } from 'gsap'


function Hero() {




  return (


    <div className='top-box' id='top-box'>
      <div className='hero' id='item1'>
        <div className="hero-contant">
          <div className="pera"><p id='item2'>WELCOME</p></div>
          <h1 id='item3'>Get a smart car <br /> like you.</h1>
          <p id='item4' className='pera1'>Wonderful experience provider <br /> four-wheelers.</p>
          <div className="btn-box">
            <Link ><div className="btn">Discover More</div></Link>
            <Link><div className="btn">Sign up</div></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero