import React from 'react';
import { Button } from 'react-bootstrap';
import Rating from 'react-rating';
import MessageSellerModal from './MessageSellerModal.js';
import BuyItNowModal from './BuyItNowModal.js';
import AddToCartModal from './AddToCartModal.js';

class Title extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msgSellerClicked: false,
      buyItNowClicked: false,
      addToCartClicked: false
    };

    this.toggleClickOnMsgSeller = this.toggleClickOnMsgSeller.bind(this);
    this.toggleClickOnBuyItNow = this.toggleClickOnBuyItNow.bind(this);
    this.toggleClickOnAddToCart = this.toggleClickOnAddToCart.bind(this);
  }

  toggleClickOnMsgSeller() {
    this.setState({
      msgSellerClicked: !this.state.msgSellerClicked
    });
  }

  toggleClickOnBuyItNow() {
    this.setState({
      buyItNowClicked: !this.state.buyItNowClicked
    });
  }

  toggleClickOnAddToCart() {
    this.setState({
      addToCartClicked: !this.state.addToCartClicked
    });
  }

  render() {
    return (
      <div>
        <p>
          <span className='seller'>{this.props.seller}</span>
          <span>
            <Rating
              className='stars'
              readonly
              fullSymbol='fa fa-star fa-2x'
              emptySymbol='fa fa-star-o fa-2x'
              initialRating={this.props.avgRating}
            />
          </span>
        </p>
        <p />
        <h1 className='title'>{this.props.title}</h1>
        <p>
          <span className='price'>${this.props.price}</span>
          <span>
            <Button
              className='messageBtn'
              variant='outline-secondary'
              size='sm'
              onClick={() => {
                console.log('clicked on Message Seller!');
                this.toggleClickOnMsgSeller();
              }}
            >
              Message Seller
            </Button>
            {this.state.msgSellerClicked && <MessageSellerModal />}
          </span>
        </p>
        <div className='select-wrapper'>
          <p className='quantity'>Quantity</p>
          <select className='quantityBtn'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
          </select>
        </div>
        <Button
          className='buyBtn'
          variant='outline-dark'
          size='sm'
          block
          onClick={() => {
            console.log('clicked on Buy it now!');
            this.toggleClickOnBuyItNow();
          }}
        >
          Buy it now
        </Button>
        {this.state.buyItNowClicked && <BuyItNowModal />}
        <Button
          className='addToCartBtn'
          variant='dark'
          size='sm'
          block
          active
          onClick={() => {
            console.log('clicked on Add to cart!');
            this.toggleClickOnAddToCart();
          }}
        >
          Add to cart
        </Button>
        {this.state.addToCartClicked && <AddToCartModal />}
      </div>
    );
  }
}

export default Title;
