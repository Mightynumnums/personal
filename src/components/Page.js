import React from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'

export default class Page extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="main-content">
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
