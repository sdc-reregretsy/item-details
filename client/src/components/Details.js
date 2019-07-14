import React from 'react';

const Details = props => {
  return (
    <div>
      <hr />
      <h1 className='itemDetails'>Item details</h1>
      <p className='description'>{props.description}</p>
      <hr />
      <div className='shipping'>
        Shipping & policies
        <br />
        <div className='shippingInfo'>
          Get it fast! Ready to ship in 1–2 business days.
          <br />
          From Kensington, MD
          <br />
          <a href='#'>Get shipping cost</a>
          <br />
          <br />
          <a href='#'>View shop policies</a>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Details;
