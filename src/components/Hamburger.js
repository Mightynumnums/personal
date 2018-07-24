import React from 'react'
import hamburger from '../images/hamburgerIcon.png'
import './styles/hamburger.css'


const Hamburger = (props) => {
  console.log('HAMBURGER PROPS', props)

 
  return (
     <div>
     <img src={hamburger} className='hamburgerIcon' alt='hamNavbar' onClick={props.onClick}/>
     </div>
  )
}

export default Hamburger