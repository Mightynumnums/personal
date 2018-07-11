import React, { Component } from 'react';
import './App.css';
//import github from './images/github.svg'
import Footer from './components/Footer.js'
import Main from './components/Main.js'
import Navbar from './components/Navbar.js'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
