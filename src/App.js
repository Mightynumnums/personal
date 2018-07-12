import React, { Component } from 'react'
import './App.css';
import { Route, NavLink, HashRouter, Switch } from "react-router-dom";
import Footer from './components/Footer.js'
import Home from './components/Home.js'
import Projects from './components/Projects.js'
import Resume from './components/Resume.js'



class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app header">
          <ul className='navigate'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/projects'>Projects</NavLink></li>
            <li><NavLink to='/resume'>Resume</NavLink></li>
          </ul>
          <div className='content'>
          <Switch>
            <Route exact={true} path to='/' component={Home}>Home</Route>
            <Route path to='/projects' component={Projects}>Projects</Route>
            <Route path to='/resume' component={Resume}>Resume</Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
