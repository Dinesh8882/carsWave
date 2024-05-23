import React from 'react'
import './NewsLetter.css'
import car_newsletter from '../assets/car-2.jpg'
import { Link } from 'react-router-dom'

function NewsLetter() {
    return (
        <div className='news-letter'>
            {/* <img src={car_newsletter} alt="" /> */}
            <div className="news-container">
                <div className="dis-container">
                    <h1>Stay Updated with <span className='change'>Cars Wave</span> Newsletter !</h1>
                    <p>
                        To Subscribe to 
                        our newsletter and start receiving regular updates, simply
                        visit our website and sign up using your email address. it's quick , easy 
                        and completely.
                    </p>
                    <div className="subs">
                        <input type="email" placeholder='Enter Email'  />
                        <div className="btn-newsletter"><Link>Subscribe us</Link></div>
                    </div>
                </div>
                <div className="img-container">

                    <img src={car_newsletter} alt="" />
                </div>
            </div>
        </div>
    )
}

export default NewsLetter