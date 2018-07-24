import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/navbar.css'

const Navbar = (props) => {

  const className = props.hidden ? 'navigate hidden' : 'navigate';
  return (
      <ul className={className} id='navbar'>
        <li id='home'><NavLink to='/home'>HOME</NavLink></li>
        <li id='projects'><NavLink to='/projects'>PROJECTS</NavLink></li>
        <li id='resume'><NavLink to='/resume'>RESUME</NavLink></li>
        <li id='contacts'><NavLink to='/contacts'>CONTACTS</NavLink></li>
      </ul>
  )
}

export default Navbar