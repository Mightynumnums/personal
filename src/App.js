import React, { Component } from 'react'
import './App.css';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from './components/Home.js'
import Projects from './components/Projects.js'
import Resume from './components/Resume.js'
import Contacts from './components/Contacts.js'
import LandingPage from './components/LandingPage'



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path='/' component={LandingPage}></Route>
          <Route path='/home' component={Home}>Home</Route>
          <Route path='/projects' component={Projects}>Projects</Route>
          <Route path='/resume' component={Resume}>Resume</Route>
          <Route path='/contacts' component={Contacts}>Contact</Route>
        </div>
      </Router >
    );
  }
}



export default App;
