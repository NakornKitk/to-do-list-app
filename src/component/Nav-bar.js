import React from 'react'
import icon from '../images/calendar-checkmark-icon.svg'

function NavBar() {
  return (
    <div className="navbar">
        <img className="icon" src={icon} alt=""></img>
        <p>To do list App</p>
    </div>
  )
}

export default NavBar