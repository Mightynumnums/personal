import React from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'

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
    const { lastScrollY } = this.state;
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      this.setState({ hidden: true });
    } else {
      this.setState({ hidden: false });
    }
    this.setState({ lastScrollY: currentScrollY });
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

