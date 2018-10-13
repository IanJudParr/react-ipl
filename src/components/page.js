import React, { Component } from 'react';

import Product from './product';

class Page extends Component {
 
  
  showProducts = function(){
    var products = [];  
    if(!this.props.data.items) return products;
    this.props.data.items.forEach(element => {
      products.push(<Product itemData={element}/>);          
    });

    return products;
  };

  render() {
    return (
      <div>
        <div class="panel panel-success">
          <div class="panel-heading">{this.props.data.title}</div>
          <div class="panel-body">
            {this.props.data.body}
            {this.showProducts()}
          </div>
        </div>
      </div>
    )
  }
}

export default Page;