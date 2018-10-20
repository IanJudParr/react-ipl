import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import ReactDOM from "react-dom";


import Home from './components/home';
import About from './components/about';
import Products from './components/products';
import NotFound from './components/notFound';
import Page from './components/page';
import './themes/clean/content/css/theme.css';

var _ = require('underscore');

class App extends Component {
  constructor(props, context) {
    super(props, context);

    var self = this;

    this.data = require('./data/data.json');

    this.state = {data: this.data, currentPage:null};

    this.navBarPages = [];
    this.fluidPages = [];
    this.routes = [];

    this.formatPage = function(page){
      page.layout = {};

      if (page.footer) {
        page.layout.withFooter = true;
      }

      if(page.items)
      {
        page.layout.hasItemListing = true;
      }

      return page;
    };

    this.data.content.pages.forEach(page => {
      page = this.formatPage(page);

      self.navBarPages.push(<li> <Link to={`/${page.title}`} key={page.id} >{page.title}</Link> </li>);
      self.fluidPages.push(<span class="icon-bar"> <Link to={`/${page.title}`} key={page.id} >{page.title}</Link> </span>);
    });

    this.getPageData = function (data, props) {
      var page = _.findWhere(data.content.pages, { title: props.match.params.page });
      if(page)
        return page;

      return {
        "title": "Page Not Found",
        "body": "Oops - the page you're looking for doesn't exist"
    };

    };
    
  }

  render() {

    return (
      <div className="App" class="container">

        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              {this.fluidPages}
            </button>
            <Link className="navbar-brand" to="/">{this.data.content.siteName}</Link>
          </div>

          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              {this.navBarPages}
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
