import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import UserState from "../../context/userContext"
import "./Navbar.scss"

function Navbar() {
  const logOut = (e) => {
    e.preventDefault()
    localStorage.removeItem("user")
    window.location.reload()
  }

  return (
    <div className='navigation'>
      <div className='container container__flex'>
        <NavLink
          to='/home'
          activeClassName='navigation__link__active'
          className='title'>
          Postify
        </NavLink>
        <div className='navigation__center'>
          <NavLink to='/about' activeClassName='navigation__link__active'>
            About Us
          </NavLink>
          <NavLink to='/profile' activeClassName='navigation__link__active'>
            Profile
          </NavLink>
        </div>
        <button onClick={logOut} className='navigation__link'>
          Log Out
        </button>
      </div>
    </div>
  )
}

export default Navbar
