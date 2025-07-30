import React from 'react'
import './Hero.css'
import prof_img from '../../assets/IMG_20241228_084235.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
       <img src={prof_img} alt="" /> 
       <h1><span>I'm Suryasnata Rout,</span> frontend developer based in Bhubaneshwar.</h1>
       <p>Skilled in building responsive websites using modern tools like React.js. Certified in Python and passionate about continuous learning and creating user-friendly web applications.</p>
       <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
       </div>
    </div>
  )
}

export default Hero