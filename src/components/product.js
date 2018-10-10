import React from 'react';

const Product = ({ match }) => (
  <h3>Product with ID {match.params.id}</h3>

  
);

export default Product;