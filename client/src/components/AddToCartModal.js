import React from 'react';
import { Button, Modal, Image, Container, Row, Col } from 'react-bootstrap';

class AddToCartModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        show={this.props.showAddToCartModal}
        centered
        dialogClassName='modal-addToCart'
      >
        <Modal.Header
          className='addToCartHeader'
          closeButton
          onClick={this.props.toggleShowAddToCartModal}
        >
          Item added to Shopping Cart!
        </Modal.Header>
        <Modal.Body className='addToCartBody'>
          <Container>
            <Row>
              <Col>
                <Image src={this.props.cartImage} fluid />
              </Col>
              <Col>
                <p className='itemInCart'>{this.props.item}</p>
                <p className='priceInCart'>${this.props.price}</p>
              </Col>
            </Row>
            <Row>
              {/* <p className='hasBeenAdded'>has been added to cart!</p> */}
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className='proceedAddToCart'
            variant='secondary'
            onClick={this.props.toggleShowAddToCartModal}
          >
            Proceed to checkout
          </Button>
          <Button
            className='continueShopping'
            variant='outline-primary'
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
