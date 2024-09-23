import React from 'react';
import { useSelector } from 'react-redux';

const CartSummary = ({ }) => {

    const cartItems = useSelector(store => store.cart.items);
    const totalAmount = useSelector(store => store.cart.totalAmount);
    const totalPrice = useSelector(store => store.cart.totalPrice);

    return (
        <div className="cart-summary">
            <p><strong>จำนวนสินค้าทั้งหมด:</strong> {totalAmount}</p>
            <p><strong>ราคารวม:</strong> ฿{totalPrice.toFixed(2)}</p>
        </div>
    );
};

export default CartSummary;
