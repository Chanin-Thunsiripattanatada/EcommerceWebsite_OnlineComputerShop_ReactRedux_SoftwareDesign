import React, { useState, useEffect, useContext } from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

import { useSelector } from 'react-redux';

const Cart = () => {

    const cartItems = useSelector(store => store.cart.items)
    console.log(cartItems)
    /*useEffect(() => {
        const loadedData = window.localStorage.getItem('CART_ITEMS');
        if(loadedData !== null){
            setCartItems(JSON.parse(loadedData));
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem('CART_ITEMS', JSON.stringify(cartItems));
    }, [cartItems]);

    const handleRemove = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const handleUpdateQuantity = (id, quantity) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity } : item
        ));
    };

    const handleCheckout = () => {
        alert('Proceeding to checkout!');
        // Handle checkout logic here
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length > 0 ? (
                <div>
                    {cartItems.map(item => (
                        <CartItem
                            key={item.id}
                            item={item}
                            onRemove={handleRemove}
                            onUpdateQuantity={handleUpdateQuantity}
                        />
                    ))}
                    <CartSummary totalPrice={totalPrice} onCheckout={handleCheckout} />
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );*/
};

export default Cart;
