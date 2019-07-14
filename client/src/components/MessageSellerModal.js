import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/ModalHeader';

class MessageSellerModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMessageSellerModal: false
    };

    this.toggleShowMessageSellerModal = this.toggleShowMessageSellerModal.bind(
      this
    );
  }

  toggleShowMessageSellerModal() {
    this.setState({
      showMessageSellerModal: !this.state.showMessageSellerModal
    });
  }

  render() {
    return (
      <Modal show={this.state.showMessageSellerModal}>
        <ModalHeader>Message seller button</ModalHeader>
        <ModalBody>Got questions? Seller can help!</ModalBody>
        <ModalFooter>
          <Button
            variant='secondary'
            onClick={this.toggleShowMessageSellerModal}
          >
            Send
          </Button>
          <Button variant='primary' onClick={this.toggleShowMessageSellerModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default MessageSellerModal;
