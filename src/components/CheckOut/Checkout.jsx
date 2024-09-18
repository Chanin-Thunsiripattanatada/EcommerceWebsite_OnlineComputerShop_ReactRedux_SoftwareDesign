import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../stores/CartData"
import { placeOrder } from "../../redux/actions/orders";

const Checkout = () => {

    const orders = useSelector((state) => state.orders)
    const cartItems = useSelector(store => store.cart.items);

    const totalAmount = useSelector(store => store.cart.totalAmount);
    const totalPrice = useSelector(store => store.cart.totalPrice);

    const dispatch = useDispatch();
    const [orderPlaced, setOrderPlaced] = useState(false);
    const navigate = useNavigate();

    const handlePlaceOrder = () => {
        console.log("Order Placed:", { cartItems });
        
        const token = sessionStorage.getItem("authToken");
        const customerId = sessionStorage.getItem("customerId");

        const OrderCreationData = {
            orderItems: [],
            shippingStatus: 'Processing',
            totalAmount: totalAmount
        }

        for (const cartItem of cartItems) {
            OrderCreationData.orderItems.push(
                {
                    productId: cartItem.product.productId,
                    quantity: cartItem.quantity,
                    price: cartItem.product.price * cartItem.quantity 
                }
            );
        }

        dispatch(placeOrder(token, customerId, OrderCreationData))

        dispatch(clearCart()); // Clear cart after placing order
        setOrderPlaced(true);
        setTimeout(() => navigate("/order-confirmation"), 3000); // Redirect to order confirmation after 3 seconds
    };

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            {orderPlaced ? (
                <p>Your order has been placed successfully! Redirecting...</p>
            ) : (
                <>
                    <div className="cart-summary">
                        <h3>Cart Summary</h3>
                        {cartItems.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            <ul>
                                {cartItems.map((item) => (
                                    <li key={item.id}>
                                        {item.product.product_name} - ${item.product.price} x {item.quantity}
                                    </li>
                                ))}
                            </ul>
                        )}
                        <p>Total Amount: {totalAmount}</p>
                        <p>Total Price: ${totalPrice.toFixed(2)}</p>
                    </div>
                    
                    <button className="place-order-btn" onClick={handlePlaceOrder}>
                        Place Order
                    </button>
                </>
            )}
        </div>
    );
};

export default Checkout;
