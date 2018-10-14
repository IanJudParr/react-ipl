import React from 'react';
import LocationMap from './googleMap';

export default class ContactItem extends React.Component {

  ContactUsForm = function () {
    if (!this.props.data.toEmailAddress) return <div></div>;
    return (
      <div>
        <div class="col-lg-6 form-group">

          <div class="row">
            <div class="input-group input-group-lg">
              <span class="input-group-addon" id="basic-addon1">@</span>
              <input type="text" class="form-control" placeholder="email address" />
            </div>
          </div>
          <div class="row top-buffer">
            <textarea class="input-group input-group-lg form-control" rows="5" id="comment"></textarea>
          </div>
          <div class="row top-buffer">
            <button type="button" class="btn btn-lg btn-success pull-right">Send</button>
          </div>
        </div>
        <div class="col-lg-6 form-group">
          <LocationMap data={this.props.data} />
        </div>
      </div>
    )
  };

  render() {
    return (this.ContactUsForm());
  }
};