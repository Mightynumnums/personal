import React from 'react'
import hamburger from '../images/hamburgerIcon.png'
import './styles/hamburger.css'


const Hamburger = (props) => {
  console.log('HAMBURGER PROPS', props)

 
  return (
     <div id='hanburger'>
     <h6 id='menu'>MENU</h6>
     <img src={hamburger} className='hamburgerIcon' alt='hamNavbar' onClick={props.onClick}/>
     </div>
  )
}

export default Hamburger