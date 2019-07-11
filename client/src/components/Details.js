import React from 'react'

const Details = (props) => {
    return <div>
        <hr />
        <h1 className="itemDetails">Item details</h1>
        <p className="description">Vintage from the 1960s</p>
        <p className="description">Better Homes and Gardens’ NEW GARDEN BOOK. Item is in excellent condition filled with beautiful vintage photos and excellent gardening tips. Such a dreamy housewarming gift!<br></br><br></br>
            Published in New York by Meredith Corporation 1968.</p>
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