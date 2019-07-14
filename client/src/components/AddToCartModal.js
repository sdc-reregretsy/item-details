import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/ModalHeader';

class AddToCartModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAddToCartModal: true
    };

    this.toggleShowAddToCartModal = this.toggleShowAddToCartModal.bind(this);
  }

  toggleShowAddToCartModal() {
    this.setState({ showAddToCartModal: !this.state.showAddToCartModal });
  }

  render() {
    return (
      <Modal show={this.state.showAddToCartModal}>
        <ModalHeader>Add to cart button</ModalHeader>
        <ModalBody>Item has been added to cart!</ModalBody>
        <ModalFooter>
          <Button variant='secondary' onClick={this.toggleShowAddToCartModal}>
            Proceed to checkout
          </Button>
          <Button variant='primary' onClick={this.toggleShowAddToCartModal}>
            Continue Shopping
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default AddToCartModal;
