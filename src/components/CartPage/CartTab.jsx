import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleCartTabVisibility, openCartTab, closeCartTab } from '../../stores/CartData';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

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
      <h4>ตระกร้าสินค้า</h4>
      <div className="cart-items">
        <table class="table table-sd">
          <thead>
            <tr>
              <th></th>
              <th>ชื่อ</th>
              <th>ราคา</th>
              <th>ราคารวม</th>
              <th>จำนวน</th>
              <th>ลบ</th>
            </tr>
          </thead>
          <tbody>{cartItems.map((item, key) => <CartItem key={key} data={item} />)}</tbody>
        </table>

      </div>
      <CartSummary />
      <div className="button-group">
        <button className="btn btn-secondary"onClick={handleOpenCartTab}>ปิด</button>
        <Link className="btn btn-primary" to="/checkout">ชำระเงิน</Link>
      </div>
    </div>

  );
};

export default CartTab;
