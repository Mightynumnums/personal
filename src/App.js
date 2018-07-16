import React, { Component } from 'react'
import './App.css';
import { Route, NavLink, HashRouter, Switch } from "react-router-dom";
import Footer from './components/Footer.js'
import Home from './components/Home.js'
import Projects from './components/Projects.js'
import Resume from './components/Resume.js'
import Contacts from './components/Contacts.js'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app header">
          <ul className='navigate'>
            <li id='home'><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/projects'>Projects</NavLink></li>
            <li><NavLink to='/resume'>Resume</NavLink></li>
            <li><NavLink to='/contacts'>Contact</NavLink></li>
          </ul>
          <div className='content'>
            <Switch>
              <Route exact={true} path='/' component={Home}>Home</Route>
              <Route path='/projects' component={Projects}>Projects</Route>
              <Route path='/resume' component={Resume}>Resume</Route>
              <Route path='/contacts' component={Contacts}>Contact</Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
