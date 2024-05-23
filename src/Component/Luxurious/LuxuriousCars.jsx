import React from 'react'
import { Link } from 'react-router-dom'

import './LuxuriousCars.css'
import LuxuriousCa from '../assets/Luxurious.js'
import cars from '../assets/latest-car-2.webp'

function LuxuriousCars() {
    return (
        <div className='luxurious'>

            <div className="cars-list">

                {LuxuriousCa.map((item) => {
                    return <div className="car1">
                        <img src={item.image} alt="" />
                        <div className="price">
                            <div className="price-content">
                                <h1>Model -{item.model}</h1>
                                <h4>price -{item.price}</h4>
                            </div>
                            <div className="link">
                                <Link>Explore More</Link>
                            </div>
                        </div>
                    </div>
                })}

            </div>
        </div>
    )
}

export default LuxuriousCars