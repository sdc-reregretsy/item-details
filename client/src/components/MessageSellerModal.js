import React from 'react';
import { Button, Modal, Form, Col } from 'react-bootstrap';

class MessageSellerModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal show={this.props.showMessageSellerModal} centered>
        <Modal.Header
          closeButton
          onClick={this.props.toggleShowMessageSellerModal}
          className='messageSellerHeader'
        >
          Got questions? {this.props.seller} can help!
        </Modal.Header>
        <Modal.Body>
          <Form
            inline
            onSubmit={() => {
              event.preventDefault();
            }}
          >
            <Form.Control
              type='textarea'
              placeholder='Write a message and hit enter to send'
              rows='4'
            />

            <Button
              className='sendMessage'
              variant='link'
              onClick={this.props.toggleShowMessageSellerModal}
            >
              <i class='fas fa-arrow-circle-right' />
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default MessageSellerModal;
