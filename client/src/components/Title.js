import React from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Rating from 'react-rating';

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
          />
        </span>
      </p>
      <p />
      <h1 className='title'>{props.title}</h1>
      <p>
        <span className='price'>${props.price}</span>
        <span>
          <Button className='messageBtn' variant='outline-secondary' size='sm'>
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
        </select>
      </div>
      <Button className='buyBtn' variant='outline-dark' size='sm' block>
        Buy it now
      </Button>
      <Button className='buyBtn' variant='dark' size='sm' block active>
        Add to cart
      </Button>
    </div>
  );
};

export default Title;
