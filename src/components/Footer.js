import React, { Component } from 'react'
import github from '../images/github.svg'
import mail from '../images/mail.svg'
import linked from '../images/linked2.svg'
import './styles/footer.css'


export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className='footer-logos'>
          <img src={mail} className="logo" alt="logo" />
          <img src={github} className="logo" alt="logo" />
          <img src={linked} className="logo" alt="logo" />
        </div>
      </div>
    );
  }
}

