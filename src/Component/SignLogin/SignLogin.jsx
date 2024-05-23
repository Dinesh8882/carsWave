import React from 'react'
import './SignLogin.css'
import google from '../../Component/assets/google.png'
import facebook from '../../Component/assets/facebook.png'
import email from '../../Component/assets/mail.png'
import password from '../../Component/assets/password.png'

import { Link } from 'react-router-dom'

function SignLogin() {
    return (
        <div className='loginbox'>
            <div className="login-box">
                <div className="login-left">
                    <div className="glass-effect">
                        <h1>Log in to your Account</h1>
                        <p className='pera'>Welcome back! Select method to log in:</p>
                        <div className="login-method">
                            <div className="google method-item">
                                <img className='method-icon' src={google} alt="" />
                                <h4>Google</h4>
                            </div>
                            <div className="facebook method-item">
                                <img className='method-icon' src={facebook} alt="" />
                                <h4>Facebook</h4>
                            </div>
                        </div>
                        <div className="option">
                            <p>or continue with email</p>
                        </div>

                        <div className="form">
                            <div className="email">
                                <img src={email} className='method-icon' alt="" />
                                <input type="email" placeholder='Email' />
                            </div>
                            <div className="password email">
                                <img src={password} className='method-icon' alt="" />
                                <input type="password" placeholder='Password' />
                            </div>
                            <div className="refo">
                                <div className="checkbox">
                                    <input type="checkbox" />
                                    <p>Remember me</p>
                                </div>
                                <Link>Forgot Password?</Link>
                            </div>

                            <div className='login-btn'><Link>Log in</Link></div>
                            <div className="dont-have">
                                <p>Don't have an account?</p>
                                <Link> Create an account</Link>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default SignLogin 