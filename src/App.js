import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Home from './components/home';
import About from './components/about';
import Messages from './components/messages';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="menu">
          <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/messages">Messages</Link> </li>
            <li> <Link to="/about">About</Link> </li>
          </ul>
      </div>
      <div className="App-intro">
      <Route exact path="/" component={Home}/>
          <Route path="/messages" component={Messages}/>
          <Route path="/about" component={About}/>
        </div>
    </div>
    );
  }
}

export default App;
