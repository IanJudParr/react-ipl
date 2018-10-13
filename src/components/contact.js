import React from 'react';

import Product from './product';

export default class Products extends React.Component {

  showProducts = function(){
    var products = [];  
    if(!this.props.data.items) return products;
    this.props.data.items.forEach(element => {
      products.push(<Product itemData={element}/>);          
    });

    return products;
  };

  render(){
    return <div>
      {this.showProducts()}
    </div>
  }
};