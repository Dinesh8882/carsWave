import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar'
// import Page1 from './Pages/Home'
import Home from './Pages/Home'
import Footer from './Component/Footer/Footer'
import LoginSign from './Pages/LoginSign'
// import About from './Component/About/About'
import AboutPage from './Pages/AboutPage'
import Luxurious from './Pages/Luxurious'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/loginsign' element={<LoginSign />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/luxurious' element={<Luxurious />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
