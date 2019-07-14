import React from 'react';
import { Button, Modal } from 'react-bootstrap';

class AddToCartModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal show={this.props.showAddToCartModal} centered>
        <Modal.Header>Add item to cart</Modal.Header>
        <Modal.Body>{this.props.item} has been added to cart!</Modal.Body>
        <Modal.Footer>
          <Button
            variant='secondary'
            onClick={this.props.toggleShowAddToCartModal}
          >
            Proceed to checkout
          </Button>
          <Button
            variant='primary'
            onClick={this.props.toggleShowAddToCartModal}
          >
            Continue Shopping
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddToCartModal;
