import React from 'react';
import ContactItem from './contactItem';

export default class Contact extends React.Component {

  show = function(){

    return this.props.data.contact != null;
  };

  render(){
    return(
      <div>        
        { this.show() ? <ContactItem data={this.props.data.contact} /> : null }
    </div>
    )
  }
};