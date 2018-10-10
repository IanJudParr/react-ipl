import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";


import Home from './components/home';
import About from './components/about';
import Products from './components/products';
import NotFound from './components/notFound';

class App extends Component {
  render() {
    return (
      <div className="App">


        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">Love Earth To Bits</Link> 
          </div>

          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">              
              <li> <Link to="/about">About</Link> </li>
              <li> <Link to="/products">Products</Link> </li>
            </ul>
          </div>

        </nav>

        <div className="App-intro">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/about" component={About} />
            <Redirect to="/" component={NotFound} />
          </Switch>
        </div>
      </div >
    );
  }
}

export default App;
