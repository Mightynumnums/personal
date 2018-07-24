import React from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import './styles/page.css'

export default class Page extends React.Component {
  constructor() {
    super()
    this.state = {
      lastScrollY: 0,
      hidden: false
    }
    this.handleScroll = this.handleScroll.bind(this)
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

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="main-content">
        <Navbar hidden={this.state.hidden} />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

