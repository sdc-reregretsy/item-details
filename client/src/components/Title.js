import React from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Title = props => {
  return (
    <div>
      <p className='seller'>{props.seller}</p>
      <h1 className='title'>{props.title}</h1>
      <p>
        <span className='price'>${props.price}</span>
        <span>
          <Button className='messageBtn' variant='outline-secondary' size='sm'>
            Message Seller
          </Button>
        </span>
      </p>
      <p className='quantity'>Quantity</p>
      <DropdownButton id='dropdown-button' className='quantityBtn'>
        <Dropdown.Item as='button'>1</Dropdown.Item>
        <Dropdown.Item as='button'>2</Dropdown.Item>
        <Dropdown.Item as='button'>3</Dropdown.Item>
        <Dropdown.Item as='button'>4</Dropdown.Item>
        <Dropdown.Item as='button'>5</Dropdown.Item>
      </DropdownButton>
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
