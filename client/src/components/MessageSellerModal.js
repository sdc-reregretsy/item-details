import React from 'react';
import { Button, Modal, Form, Image, Row, Col } from 'react-bootstrap';

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
          <Row>
            <Col lg={2}>
              <Image
                className='messageSellerAvatar'
                src={this.props.sellerAvatar}
                roundedCircle
                fluid
              />
            </Col>
            <Col lg={8}>
              <Row>
                {this.props.sellerName} from {this.props.sellerHandle}
              </Row>
              <Row className='typicallyResponds'>
                Typically responds within a few hours
              </Row>
            </Col>
          </Row>
        </Modal.Header>
        <Modal.Body>
          <div className='gotQuestions'>
            Got questions? {this.props.sellerName} can help!
          </div>
          <Form
            inline
            onSubmit={() => {
              event.preventDefault();
              this.props.toggleShowMessageSellerModal();
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
              <i className='fas fa-arrow-circle-right' />
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default MessageSellerModal;
