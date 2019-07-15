import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

class BuyItNowModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      selected: event.target.value
    });
  }

  render() {
    return (
      <Modal
        show={this.props.showBuyItNowModal}
        centered
        dialogClassName='.modal-buyItNow'
      >
        <Modal.Header
          className='buyNowHeader'
          closeButton
          onClick={this.props.toggleShowBuyItNowModal}
        >
          Choose your payment method
        </Modal.Header>
        <Modal.Body className='paymentMethod'>
          <Form>
            <div className='paymentIcons'>
              <Form.Check
                type='radio'
                value='cc'
                checked={this.state.selected === 'cc'}
                onChange={this.handleChange}
                label={
                  <div>
                    <span className='visa'>
                      <i class='fab fa-cc-visa' />
                    </span>
                    <span className='mastercard'>
                      <i class='fab fa-cc-mastercard' />
                    </span>
                    <span className='amex'>
                      <i class='fab fa-cc-amex' />
                    </span>
                    <span className='discover'>
                      <i class='fab fa-cc-discover' />
                    </span>
                  </div>
                }
              />
              <Form.Check
                type='radio'
                value='pp'
                checked={this.state.selected === 'pp'}
                onChange={this.handleChange}
                label={
                  <span className='paypal'>
                    <i class='fab fa-cc-paypal' />
                  </span>
                }
              />
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='secondary'
            className='proceedCheckout'
            onClick={this.props.toggleShowBuyItNowModal}
          >
            Proceed to checkout
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default BuyItNowModal;
