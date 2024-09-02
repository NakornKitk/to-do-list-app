import React from 'react'
import icon from '../images/calendar-checkmark-icon.svg'

function NavBar() {
  return (
    <div className="d-flex bg-light w-100 p-2 justify-content-start align-items-center setheight" Style="background-color:rgba(255, 99, 71, 0.2)">
        <div className="col-md-1 col-xxl-2"></div>
        <img className="icon" src={icon} alt=""></img>
        <p className="my-auto ms-2 fw-bold h4">To-do List App</p>
    </div>
  )
}

export default NavBar