import React, { Component } from 'react';


class Page extends Component {

  render() {
    return (
      <div class="col-sm-5">
        <div class="panel panel-success">
          <div class="panel-heading">{this.props.data.title}</div>
          <div class="panel-body">
            {this.props.data.body}
          </div>
        </div>
      </div>
    )
  }
}

export default Page;