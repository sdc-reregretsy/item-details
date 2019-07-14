import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/ModalHeader';

class BuyItNowModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showBuyItNowModal: true
    };

    this.toggleShowBuyItNowModal = this.toggleShowBuyItNowModal.bind(this);
  }

  toggleShowBuyItNowModal() {
    console.log('toggling BIN Modal');
    this.setState({ showBuyItNowModal: !this.state.showBuyItNowModal });
  }

  render() {
    return (
      <Modal show={this.state.showBuyItNowModal}>
        <ModalHeader>Buy it now button</ModalHeader>
        <ModalBody>Choose your payment method</ModalBody>
        <ModalFooter>
          <Button variant='secondary' onClick={this.toggleShowBuyItNowModal}>
            Proceed to checkout
          </Button>
          <Button variant='primary' onClick={this.toggleShowBuyItNowModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
export default BuyItNowModal;
