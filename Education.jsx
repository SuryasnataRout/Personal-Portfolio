import React from 'react'
import './Education.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import education_data from '../../assets/education_data'
/*import arrow_icon from '../../assets/arrow_icon.svg'*/

const Education = () => {
  return (
    <div>
      <div id='education' className="education">
        <div className="education-title">
          <h1>My Education</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="education-container">
          {education_data.map((education,index)=>{
            return <div key={index} className="education-format">
              <h3>{education.e_no}</h3>
              <h2>{education.e_name}</h2>
              <p>{education.e_desc}</p>
              {/*<div className="education-readmore">
                <p>Read More</p>
                <img src={arrow_icon} alt="" />
              </div> */}
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Education