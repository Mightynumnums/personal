import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = (props) => {
  console.log('PROPS', props)

  return (


    props.hidden
      ?
      <ul className='navigate hidden' id='navbar'>
        <li id='home'><NavLink to='/home'>Home</NavLink></li>
        <li id='projects'><NavLink to='/projects'>Projects</NavLink></li>
        <li id='resume'><NavLink to='/resume'>Resume</NavLink></li>
        <li id='contacts'><NavLink to='/contacts'>Contact</NavLink></li>
      </ul>
      :

      <ul className='navigate' id='navbar'>
        <li id='home'><NavLink to='/home'>Home</NavLink></li>
        <li id='projects'><NavLink to='/projects'>Projects</NavLink></li>
        <li id='resume'><NavLink to='/resume'>Resume</NavLink></li>
        <li id='contacts'><NavLink to='/contacts'>Contact</NavLink></li>
      </ul>


  )
}

export default Navbar