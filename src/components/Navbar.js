import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/navbar.css'


const Navbar = () => {
  return (
    <ul className='navigate'>
      <li id='home'><NavLink to='/home'>Home</NavLink></li>
      <li><NavLink to='/projects'>Projects</NavLink></li>
      <li><NavLink to='/resume'>Resume</NavLink></li>
      <li><NavLink to='/contacts'>Contact</NavLink></li>
    </ul>
  )
}

export default Navbar