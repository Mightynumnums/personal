import React from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import './styles/page.css'

const Page = (props) => {
    return (
      <div className="main-content">
        <Navbar/>
       {props.children}
        <Footer />
      </div>
    )
}

export default Page
