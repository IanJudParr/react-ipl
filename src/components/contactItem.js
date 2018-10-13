import React from 'react';

export default class ContactItem extends React.Component {


  render(){
    return(
      <div>        
        {this.props.data.toEmailAddress}
    </div>
    )
  }
};