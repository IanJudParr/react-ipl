import React from 'react';
import { Route, Switch,  } from "react-router-dom";

import Product from './product';

const Products = ({ match }) => (
  <div>
    <div>
      {
        [...Array(5).keys()].map(n => {
          return <Product id={n}/>
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