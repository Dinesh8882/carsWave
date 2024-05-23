import React from 'react'
import './Latest.css'
import latest_car_1 from '../assets/latest-car-1.webp'
import latest_car_2 from '../assets/latest-car-2.webp'
import latest_car_3 from '../assets/latest-car-3.webp'
import { Link } from 'react-router-dom'

function Latest() {
    return (
        <div className='latest'>
            <div className="latest-cars">
               
                <div className="cars1">
                    <img src={latest_car_3} alt="" />
                    <div className="car-price">
                        <h3>BMW i7</h3>
                        <p className='price'>2.03 - 2.05 Cr*</p>
                        <p className='techno'>Electric</p>
                        <div className="offer">
                            <Link>Check March Offer</Link>
                        </div>
                    </div>
                </div>
                
                <div className="cars1">
                    <img src={latest_car_2} alt="" />
                    <div className="car-price">
                        <h3>BMW 6 Series</h3>
                        <p className='price'>73.50 - 78.90 Lakh*</p>
                        <p className='techno'>18.65 kmpl 1995cc Diesel</p>
                        <div className="offer">
                            <Link>Check March Offer</Link>
                        </div>
                    </div>
                </div>
                
                <div className="cars1">
                    <img src={latest_car_1} alt="" />
                    <div className="car-price">
                        <h3>BMW iX</h3>
                        <p className='price'>1.21 - 140 Cr*</p>
                        <p className='techno'>Electric</p>
                        <div className="offer">
                            <Link>Check March Offer</Link>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Latest