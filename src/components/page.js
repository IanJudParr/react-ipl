import React, { Component } from 'react';

import Product from './product';

class Page extends Component {
  constructor(props, context) {
    super(props, context);
    
    var self = this;

    this.showProducts = function(){
      var products = [];  
      props.data.items.forEach(element => {
        products.push(<Product itemData={element}/>);          
      });

      return products;
    };
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