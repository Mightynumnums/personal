import React from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import Hamburger from '../components/Hamburger.js'
import './styles/page.css'

export default class Page extends React.Component {
  constructor() {
    super()
    this.state = {
      lastScrollY: 0,
      hidden: false,
      collapsed: false
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.toggleNav = this.toggleNav.bind(this)
  }
  

  toggleNav() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    console.log('scrolling', window.scrollY)
    const { lastScrollY } = this.state;
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      this.setState({ hidden: true });
    } else if (currentScrollY < 100) {
      this.setState({ hidden: false });
    }
  };

  render() {
    return (
      <div className="main-content">
        <div>
          <Hamburger onClick={this.toggleNav} collapsed={this.state.collapsed} />
          <Navbar
            collapsed={this.state.collapsed}
            hidden={this.state.hidden}
            handleScroll={this.handleScroll}
          />
        </div>
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
