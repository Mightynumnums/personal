import React, { Component } from 'react'
import './App.css';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Footer from './components/Footer.js'
import Home from './components/Home.js'
import Projects from './components/Projects.js'
import Resume from './components/Resume.js'
import Contacts from './components/Contacts.js'
import Navbar from './components/Navbar.js'



class App extends Component {
  render() {
    return (
      <Router>
        <div className="content">
          <Navbar />
          <Route exact={true} path='/' component={Home}>Home</Route>
          <Route path='/projects' component={Projects}>Projects</Route>
          <Route path='/resume' component={Resume}>Resume</Route>
          <Route path='/contacts' component={Contacts}>Contact</Route>
          <Footer />
        </div>
      </Router >
    );
  }
}



export default App;
