import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../assets/Favicon.png'
import { Link } from 'react-router-dom'
import login_car from '../assets/sport-car.png'
// import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import menu from '../assets/menus.png'

function Navbar() {
    const [action, setAction] = useState("home")
    const [drive, setDrive] = useState(false);
    const [sticky, setSticky] = useState(false);
    const [open, setOpen] = useState(false);
    const color = useRef();
    const driving = useRef();
    useEffect(() => {
        if (drive === true) {
            driving.current.style.transform = "translateX(115px)"
        }
    }, [drive])

    const carBack = () => {
        driving.current.style.transform = "translateX(-100px)";
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })


    }, []);
    (() => {
        const text1 = document.querySelector(".logo h1")
        // text1.innerHTML = "<span>" + text1.innerHTML.split("").join("</span><span>") + "</span>"
        console.log(text1)
        console.log(text1)
    })()

    return (
        <div className={`navbar ${sticky ? 'dark_nav' : ''}`}>

            <div className="logo">
                <img width={40} src={logo} alt="" />
                <h1>CarsWave</h1>
            </div>

            <ul className={`${open === true ? "show" : "hide"}`}>
                <li><Link to='' onClick={() => { setAction("home"); carBack(); setDrive(false) }}>Home</Link>{action === "home" ? <hr /> : <></>}</li>
                <li><Link to='luxurious' onClick={() => { setAction("new"); carBack(); setDrive(false) }}>Luxurious</Link>{action === "new" ? <hr /> : <></>}</li>
                {/* <li><Link onClick={() => { setAction("old"); carBack(); setDrive(false) }}>Old</Link>{action === "old" ? <hr /> : <></>}</li> */}
                <li><Link to='about' onClick={() => { setAction("about"); carBack(); setDrive(false) }}>About</Link>{action === "about" ? <hr /> : <></>}</li>
            </ul>

            <div className="login" >
                <Link to='/loginsign' onClick={() => {
                    drive === false ? setDrive(true) : setDrive(false)
                    document.querySelector("h3").style.color = "white"
                    setAction("")

                }}><h3 ref={color}>Login</h3></Link>
                <img ref={driving} src={login_car} alt="" />

            </div>


            <i class="ri-menu-4-line" id='menu-icon' onClick={(() => setOpen(!open))}></i>

        </div>


    )
}

export default Navbar