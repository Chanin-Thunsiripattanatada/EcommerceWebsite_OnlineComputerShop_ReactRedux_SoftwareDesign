import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleCartTabVisibility ,openCartTab, closeCartTab } from '../../stores/CartData';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import QuantityButton from './QuantityButton';

const CartTab = () => {
  const cartItems = useSelector(store => store.cart.items);
  const cartTabVisibility = useSelector(store => store.cart.cartTabVisibility);
  const dispatch = useDispatch();
  const cartTabRef = useRef(null);
  console.log("cartItems === " + cartItems)
  const handleOpenCartTab = () => {
    dispatch(toggleCartTabVisibility());
  };

  const handleClickOutside = (event) => {
    if (cartTabRef.current && !cartTabRef.current.contains(event.target)) {
      dispatch(closeCartTab());
    }
    else if (cartTabRef.current && cartTabRef.current.contains(event.target)) {
    dispatch(openCartTab());
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={cartTabRef}
      className={`cart-tab-container transform transition-transform duration-500 ${cartTabVisibility ? "" : "translate-x-full"}`}
    >
      <h2>Cart</h2>
      <div className="cart-items">
        {cartItems.map((item, key) =>
          <CartItem key={key} data={item} />
        )}
      </div>
      <CartSummary />
      <div className="button-group">
        <button onClick={handleOpenCartTab}>Close</button>
        <Link className="btn btn-primary" to="/checkout">Checkout</Link>
      </div>
    </div>
  );
};

export default CartTab;
