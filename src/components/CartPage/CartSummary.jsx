import React from 'react';
import { useSelector } from 'react-redux';

const CartSummary = ({ }) => {

    const cartItems = useSelector(store => store.cart.items);
    const totalAmount = useSelector(store => store.cart.totalAmount);
    const totalPrice = useSelector(store => store.cart.totalPrice);

    return (
        <div className="cart-summary">
            <p>Total Amount: {totalAmount}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
    );
};

export default CartSummary;
