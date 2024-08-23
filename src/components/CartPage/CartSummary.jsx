import React from 'react';
import { useSelector } from 'react-redux';

const CartSummary = ({ totalPrice, onCheckout }) => {

    const cartItems = useSelector(store => store.cart.items);

    const calTotalPrice = () => {
        
    }

    return (
        <div className="cart-summary">
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            <button onClick={onCheckout}>Checkout</button>
        </div>
    );
};

export default CartSummary;
