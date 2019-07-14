import React from 'react';
import { Button, Modal } from 'react-bootstrap';

class MessageSellerModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal show={this.props.showMessageSellerModal}>
        <Modal.Header>Message seller button</Modal.Header>
        <Modal.Body>Got questions? Seller can help!</Modal.Body>
        <Modal.Footer>
          <Button
            variant='secondary'
            onClick={this.props.toggleShowMessageSellerModal}
          >
            Send
          </Button>
          <Button
            variant='primary'
            onClick={this.props.toggleShowMessageSellerModal}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default MessageSellerModal;
