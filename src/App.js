import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import ReactDOM from "react-dom";


import Home from './components/home';
import About from './components/about';
import Products from './components/products';
import NotFound from './components/notFound';
import Page from './components/page';

var _ = require('underscore');

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.data = require('./data/data.json');

    this.pages = [];
    this.routes = [];

   
    this.formatPage = function(page){
      page.layout = {};

      if (page.footer) {
        page.layout.withFooter = true;
      }

      return page;
    };

    this.data.content.pages.forEach(page => {
      page = this.formatPage(page);

      this.pages.push(<li> <Link to={`/${page.title}`} key={page.id} >{page.title}</Link> </li>);
    });

    this.getPageData = function (data, props) {
      return _.findWhere(data.content.pages, { title: props.match.params.page });
    };
    
  }

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
            <Link className="navbar-brand" to="/">{this.data.content.siteName}</Link>
          </div>

          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              {this.pages}
            </ul>
          </div>

        </nav>

        <div className="App-intro">
          <Switch>
            <Route path="/:page" render={(props) => <Page{...props} data={this.getPageData(this.data, props)} />} />
          </Switch>
        </div>
      </div>
    )
  }
}


export default App;
