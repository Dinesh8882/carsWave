import React from 'react'
import './AboutPageC.css'
import about_img from '../assets/about-page.jpg'
import rolls_roys from '../assets/rolls-roys.jpg'

function AboutPageC() {
  return (
    <div className='about-page'>
      <div className="about-img">
        <img src={about_img} alt="" />
      </div>
      <div className="about-content">
        <h1>About</h1>

        <div className="img">
          <img src={rolls_roys} alt="" />

          <div className="about-pera">
            <p>Welcome to <span className='about-span'>CarsWave</span>! We're your one-stop destination for all things automotive.
              Whether you're in the market for a new ride, seeking expert car care tips, or simply browsing
              for inspiration, we've got you covered.
            </p>
            <p>Explore our extensive collection of top - notch vehicles, ranging from sleek sedans to rugged
              SUVs and everything in between.With detailed descriptions, stunning photos, and helpful reviews,
              finding your dream car has never been easier.
            </p>
          </div>
        </div>
 
        <section>
          <p>But our website isn't just about selling cars – it's about enhancing your driving experience.
            Check out our informative blog section, where you'll discover the latest trends in the automotive
            industry, practical maintenance advice, and exciting road trip ideas. Plus, our knowledgeable
            team of car enthusiasts is always here to answer your questions and offer personalized recommendations.
          </p>
          <p>Whether you're a seasoned car aficionado or a first-time buyer, <span className='about-span'>CarsWave</span> is here to empower you on your automotive journey. Start exploring today and let us help you find the perfect vehicle to fuel your adventures!</p>
        </section>
      </div>
    </div>
  )
}

export default AboutPageC