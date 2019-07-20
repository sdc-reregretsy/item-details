import React from 'react';
import { Button } from 'react-bootstrap';
import Rating from 'react-rating';
import MessageSellerModal from './MessageSellerModal.js';
import BuyItNowModal from './BuyItNowModal.js';
import AddToCartModal from './AddToCartModal.js';

class Title extends React.Component {
  constructor(props) {
    super(props);

    this.bc = new BroadcastChannel('added');

    this.state = {
      showMessageSellerModal: false,
      showBuyItNowModal: false,
      showAddToCartModal: false
    };

    this.toggleShowMessageSellerModal = this.toggleShowMessageSellerModal.bind(
      this
    );
    this.toggleShowBuyItNowModal = this.toggleShowBuyItNowModal.bind(this);
    this.toggleShowAddToCartModal = this.toggleShowAddToCartModal.bind(this);
  }

  toggleShowMessageSellerModal() {
    this.setState({
      showMessageSellerModal: !this.state.showMessageSellerModal
    });
  }

  toggleShowBuyItNowModal() {
    this.setState({ showBuyItNowModal: !this.state.showBuyItNowModal });
  }

  toggleShowAddToCartModal() {
    this.setState({ showAddToCartModal: !this.state.showAddToCartModal });
  }

  render() {
    return (
      <div>
        <p>
          <span className='sellerHandle'>{this.props.sellerHandle}</span>
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
        <h1 className='itemTitle'>{this.props.title}</h1>
        <p>
          <span className='price'>${this.props.price}</span>
          <span>
            <Button
              className='messageSellerBtn'
              variant='outline-secondary'
              size='sm'
              onClick={this.toggleShowMessageSellerModal}
            >
              Message Seller
            </Button>
            <MessageSellerModal
              showMessageSellerModal={this.state.showMessageSellerModal}
              toggleShowMessageSellerModal={this.toggleShowMessageSellerModal}
              sellerName={this.props.sellerName}
              sellerAvatar={this.props.sellerAvatar}
              sellerHandle={this.props.sellerHandle}
            />
          </span>
        </p>
        <div className='select-wrapper'>
          <p className='quantity'>Quantity</p>
          <select className='selectQuantityBtn'>
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
          className='buyNowBtn'
          variant='outline-dark'
          size='sm'
          block
          onClick={this.toggleShowBuyItNowModal}
        >
          Buy it now
        </Button>
        <BuyItNowModal
          showBuyItNowModal={this.state.showBuyItNowModal}
          toggleShowBuyItNowModal={this.toggleShowBuyItNowModal}
        />
        <Button
          className='addToCartBtn'
          variant='secondary'
          block
          onClick={() => {
            this.toggleShowAddToCartModal();
            this.bc.postMessage('item added to cart!');
          }}
        >
          Add to cart
        </Button>
        <AddToCartModal
          showAddToCartModal={this.state.showAddToCartModal}
          toggleShowAddToCartModal={this.toggleShowAddToCartModal}
          item={this.props.title}
          cartImage={this.props.cartImage}
          price={this.props.price}
        />
      </div>
    );
  }
}

export default Title;
