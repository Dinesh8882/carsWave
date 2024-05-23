import React from 'react'
import Hero from '../Component/Hero/Hero'
import Title from '../Component/Title/Title'
import About from '../Component/About/About'
import Latest from '../Component/Latest/Latest'
import NewsLetter from '../Component/NewsLetter/NewsLetter'
import Moving from '../Component/Moving/Moving'

function Home() {
  return (
    <div>
        <Hero />
        <Title title="Lorem ipsum dolor sit amet consectetur" subTitle='About'/>
        <About />
        <Title title="Lorem ipsum dolor sit amet consectetur" subTitle='Latest Cars'/>
        <Latest />
        <NewsLetter />
        <Moving />
    </div>
  )
}

export default Home