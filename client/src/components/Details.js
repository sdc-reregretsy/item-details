import React from 'react'

const Details = (props) => {
    return <div>
        <hr />
        <h1 className="itemDetails">Item details</h1>
        <p className="description">{props.description}</p>
        <hr />
        <p className="shipping">Shipping & policies<br></br>
            <p className="shippingInfo">Get it fast! Ready to ship in 1–2 business days.
                From Kensington, MD<br></br>
                <a href="#">Get shipping cost</a><br></br><br></br>
                <a href="#">View shop policies</a></p>
            <hr />
        </p>
    </div>;
}

export default Details;