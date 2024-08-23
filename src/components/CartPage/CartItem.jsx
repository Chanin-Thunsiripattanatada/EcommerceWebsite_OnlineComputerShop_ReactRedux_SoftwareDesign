import {React, useState, useEffect} from 'react';


const CartItem = (props) => {

    const {product, quantity} = props.data;

    return (
        <div>
            <h3>{product.product_name}</h3>
            <p><strong>Quantity:</strong> {props.data.quantity}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Total:</strong> ${product.price * quantity}</p>
        </div>
    );
};

export default CartItem;
