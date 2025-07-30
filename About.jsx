import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import prof_img from "../../assets/B612_20250302_000422_063.jpg"
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={prof_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>A results-driven individual with strong problem-solving skills, a passion for continuous learning, and excellent communication skills.</p>
                    <p>I love blending logic with creativity to bring real ideas to life and contribute to meaningful projects that make an impact.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"90%"}} /></div>
                    <div className="about-skill"><p>Java</p><hr style={{width:"40%"}} /></div>
                    <div className="about-skill"><p>Python</p><hr style={{width:"50%"}} /></div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>2</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
            </div>
        </div>
    </div>
)
}

export default About