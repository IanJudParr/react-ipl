import React from 'react';
import { Button, Modal, Popover, Tooltip, OverlayTrigger } from 'react-bootstrap';



class Product extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.title = this.getTitle(this.props.id);
    this.description = this.getDescription(this.props.id);
    this.price = this.getPrice(this.props.id);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  getTitle(id){
    return "This is the title of product with Id: " + id;
  }

  getDescription(id){
    return "This is the descriiption of product with Id: " + id;
  }

  getPrice(id){
    return "£" + id;
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    return (
      <div>
        <p>{this.title}</p>

        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Launch demo modal {this.props.id}
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>{this.title}</h4>
            <p>
              {this.description}
            </p>
            <p>
              {this.price}
            </p>

            <h4>Popover in a modal</h4>
            <p>
              there is a{' '}
              <OverlayTrigger overlay={popover}>
                <a href="#popover">popover</a>
              </OverlayTrigger>{' '}
              here
            </p>

            <h4>Tooltips in a modal</h4>
            <p>
              there is a{' '}
              <OverlayTrigger overlay={tooltip}>
                <a href="#tooltip">tooltip</a>
              </OverlayTrigger>{' '}
              here
            </p>

            <hr />

           
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Product;