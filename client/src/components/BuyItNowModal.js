import React from 'react';
import { Button, Modal } from 'react-bootstrap';

class BuyItNowModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal show={this.props.showBuyItNowModal}>
        <Modal.Header>Buy it now button</Modal.Header>
        <Modal.Body>Choose your payment method</Modal.Body>
        <Modal.Footer>
          <Button
            variant='secondary'
            onClick={this.props.toggleShowBuyItNowModal}
          >
            Proceed to checkout
          </Button>
          <Button
            variant='primary'
            onClick={this.props.toggleShowBuyItNowModal}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default BuyItNowModal;
