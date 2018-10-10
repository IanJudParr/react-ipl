import React from 'react';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Grid, Navbar, Jumbotron, Button, Panel, Row, Col, Clearfix } from 'react-bootstrap';

import Product from './product';

const Products = ({ match }) => (
  <div>
    <div>
      {
        [...Array(5).keys()].map(n => {
          return <div className="col-sm-3" key={n}>

            <Link to={`${match.url}/${n + 1}`}>

              <Panel bsStyle="success">
                <Panel.Heading>
                  <Panel.Title componentClass="h3">Panel heading</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  Panel content
                </Panel.Body>
              </Panel>

            </Link>
          </div>;
        })
      }
    </div>
    <Switch>
      <Route path={`${match.url}/:id(\\d+)`} component={Product} />
      <Route path={match.url} render={() => <h3>Please select a message</h3>} />
    </Switch>
  </div>
);

export default Products;