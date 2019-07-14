import React from 'react';
import { Button } from 'react-bootstrap';
import Rating from 'react-rating';
import MessageSellerModal from './MessageSellerModal.js';
import BuyItNowModal from './BuyItNowModal.js';
import AddToCartModal from './AddToCartModal.js';

const Title = props => {
  return (
    <div>
      <p>
        <span className='seller'>{props.seller}</span>
        <span>
          <Rating
            className='stars'
            readonly
            fullSymbol='fa fa-star fa-2x'
            emptySymbol='fa fa-star-o fa-2x'
            initialRating={props.avgRating}
          />
        </span>
      </p>
      <p />
      <h1 className='title'>{props.title}</h1>
      <p>
        <span className='price'>${props.price}</span>
        <span>
          <Button
            className='messageBtn'
            variant='outline-secondary'
            size='sm'
            onClick={() => {
              console.log('clicked on Message Seller!');
              <MessageSellerModal />;
            }}
          >
            Message Seller
          </Button>
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
          console.log('clicked on Add to cart!');
          <BuyItNowModal />;
        }}
      >
        Buy it now
      </Button>
      <Button
        className='addToCartBtn'
        variant='dark'
        size='sm'
        block
        active
        onClick={() => {
          console.log('clicked on Add to cart!');
          <AddToCartModal />;
        }}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default Title;
