import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../stores/CartData"

const Checkout = () => {
    const cartItems = useSelector(store => store.cart.items);
    const totalAmount = useSelector(store => store.cart.totalAmount);
    const totalPrice = useSelector(store => store.cart.totalPrice);

    const dispatch = useDispatch();

    const [shippingInfo, setShippingInfo] = useState({
        name: "",
        address: "",
        city: "",
        zipCode: "",
        country: "",
    });

    const [paymentMethod, setPaymentMethod] = useState("Credit Card");
    const [orderPlaced, setOrderPlaced] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo({ ...shippingInfo, [name]: value });
    };

    const handlePaymentChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handlePlaceOrder = () => {
        // Handle order placement logic (API call, etc.)
        console.log("Order Placed:", { cartItems, shippingInfo, paymentMethod });
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

                    <div className="shipping-info">
                        <h3>Shipping Information</h3>
                        <form className="shipping-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={shippingInfo.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Address"
                                    value={shippingInfo.address}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    value={shippingInfo.city}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="zipCode"
                                    placeholder="ZIP Code"
                                    value={shippingInfo.zipCode}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="country"
                                    placeholder="Country"
                                    value={shippingInfo.country}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </form>
                    </div>

                    <div className="payment-method">
                        <h3>Payment Method</h3>
                        <select value={paymentMethod} onChange={handlePaymentChange}>
                            <option value="Credit Card">Credit Card</option>
                            <option value="PayPal">PayPal</option>
                            <option value="Bank Transfer">Bank Transfer</option>
                        </select>
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
