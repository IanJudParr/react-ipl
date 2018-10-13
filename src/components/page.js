import React, { Component } from 'react';

import Products from './products';

class Page extends Component {
 
  render() {
    return (
      <div>
        <div class="panel panel-success">
          <div class="panel-heading">{this.props.data.title}</div>
          <div class="panel-body">
            {this.props.data.body}
            {<Products data={this.props.data}/>}
          </div>
        </div>
      </div>
    )
  }
}

export default Page;