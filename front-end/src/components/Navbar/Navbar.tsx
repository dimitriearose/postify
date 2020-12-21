import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
    return (
        <div className='navigation'>
            <div className="container container__flex">
                <h3 className='navigation__logo'>Postify</h3>
                <div className="navigation__center">
                    <NavLink to='/' activeClassName='navigation__link__active'>Home</NavLink>
                    <NavLink to='/about' activeClassName='navigation__link__active'>About Us</NavLink>
                    <NavLink to='/profile' activeClassName='navigation__link__active'>Profile</NavLink>
                </div>
                <Link to='/signin' className='navigation__link'>Sign In</Link>
            </div>
           
        </div>
    )
}

export default Navbar
