import React, { Component } from 'react'
import './navbar.css'
//mport {Link} from 'react-router-dom'


export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <p>Home</p>
        <p>Personal</p>
        <p>Resume</p>
        <p>Contact</p>
      </div>
    );
  }
}