import React from 'react';
import LocationMap from './googleMap';

export default class ContactItem extends React.Component {

  ContactUsForm = function () {
    if (!this.props.data.toEmailAddress) return <div></div>;
    return (
      <div>
        <div class="col-lg-6 form-group">
          <form name="contact" method="POST" action={"https://formspree.io/" + "ianjudparr@gmail.com"}>
            <div class="row">
              <div class="input-group input-group-lg">
                <span class="input-group-addon" id="basic-addon1">@</span>
                <input type="email" class="form-control" placeholder="email address" name="_replyto" />
              </div>
            </div>
            <div class="row top-buffer">
              <textarea class="input-group input-group-lg form-control" rows="5" id="comment" name="name"></textarea>
            </div>
            <div class="row top-buffer">
              <input type="button" class="btn btn-lg btn-success pull-right"  type="submit" value="Send"/>
            </div>
          </form>


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