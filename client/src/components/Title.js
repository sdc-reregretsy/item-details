import React from 'react';
import Button from 'react-bootstrap/Button';

const Title = (props) => {
    return <div>
        <h1 className="title">Vintage Garden Book (1968)</h1>
        <p><span className="price">$16.00</span>
            <span><Button className="messageBtn" variant="outline-secondary" size="sm">Message Seller</Button></span>
        </p>
        <Button className="buyBtn" variant="outline-dark" size="sm" block>Buy it now</Button>
        <Button className="buyBtn" variant="dark" size="sm" block active>Add to cart</Button>
    </div>;
}

export default Title;