import React from 'react'
// import './About.css'
import './About.css'
import { Link } from 'react-router-dom'

import about_img from '../assets/car-1.jpg'

function About() {
  return (
    <div className='about'>
      <div className="left">
        {/* <img src={about_img} className='blur' alt="" /> */}
        <div className="image">
          <img src={about_img} alt="" />
        </div>
      </div>
      <div className="right">
        <h4>About</h4>
        <p>Welcome to <span className='cars'>CarsWave</span>, where you'll find great cars and friendly service.
          We have a wide selection of vehicles to choose from, and our team is here to help you find the perfect one for your
          needs and budget. Visit us today and experience the diffence at <span className='cars'>CarsWave.</span>
          <br />
          <br />
          Customer satisfaction is our top priority, and we go above and beyond to ensure that every interaction with our
          dealership exceeds your expectations.....Visit Us
        </p>
        <Link to='./about' className='visit'>Visit Us</Link>
      </div>
    </div>
  )
}

export default About