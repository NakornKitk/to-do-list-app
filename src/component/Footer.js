import React from 'react'
import gitIcon from '../images/github-icon.png'
import LinkedinIcon from '../images/linkedin-square-icon.png'

function Footer() {
  return (
    <div className="d-flex h-12 bg-light w-100 p-2 justify-content-between align-items-center fixed-bottom" Style="background-color: rgba(255, 99, 71, 0.2)">
        <div className="col-md-1 col-xxl-2"></div>
        <p className="col-6 col-md-5 col-xxl-4 my-auto fw-bold">Contact Me</p>
        <div className="d-flex justify-content-end col-6 col-md-5 col-xxl-4">
            <a href="https://github.com/NakornKitk?tab=repositories"><img className='icon' src={gitIcon} alt="" /></a>
            <a href="https://www.linkedin.com/in/nakorn-kitkancharoensin/"><img className='icon2' src={LinkedinIcon} alt=""/></a>
        </div>
        <div className="col-md-1 col-xxl-2"></div>
    </div>
  )
}

export default Footer