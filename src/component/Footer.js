import React from 'react'
import gitIcon from '../images/github-icon.png'
import LinkedinIcon from '../images/linkedin-square-icon.png'

function Footer() {
  return (
    <div className="footer">
        <p>Contact Me</p>
        <div>
            <a href="https://github.com/NakornKitk?tab=repositories"><img className='icon2' src={gitIcon} alt="" /></a>
            <a href="https://www.linkedin.com/in/nakorn-kitkancharoensin/"><img className='icon2' src={LinkedinIcon} alt=""/></a>
        </div>
    </div>
  )
}

export default Footer