import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../stores/CartData";
import { placeOrder } from "../../actions/orders";
import { useAuth } from "../../auth/AuthContext";
import CartItem from "../CartPage/CartItem";
import { addOrderItem } from "../../actions/orderItems";
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const cartItems = useSelector(store => store.cart.items);
    const totalAmount = useSelector(store => store.cart.totalAmount);
    const totalPrice = useSelector(store => store.cart.totalPrice);
    const dispatch = useDispatch();
    const { token, customer } = useAuth();
    const [customerId, setCustomerId] = useState(0);
    const [showView, setShowView] = useState(false);
    const [modalData, setModalData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (customer && customer.customerId) {
            setCustomerId(customer.customerId);
        }
    }, [customer]);

    const handlePlaceOrder = async () => {
        // Check if cartItems is empty
        if (cartItems.length === 0) {
            alert("ไม่สามารถสั่งซื้อได้: รถเข็นของคุณว่างเปล่า.");
            return; // Stop further execution
        }
    
        // Check if any cart item quantity exceeds available stock
        for (const cartItem of cartItems) {
            if (cartItem.quantity > cartItem.product.availableQuantity) {
                alert(`ไม่สามารถสั่งซื้อได้: จำนวนของ ${cartItem.product.name} มากกว่าที่มีในสต็อก.`);
                return; // Stop further execution
            }
        }
    
        // Proceed with placing the order
        const OrderCreationData = {
            customer: {
                customerId: customerId,
            },
            orderItems: [],
            status: '',
            totalAmount: totalPrice,
        };
    
        // Dispatch placeOrder action and wait for the result
        const response = await dispatch(placeOrder(token, OrderCreationData));
        const orderId = response.orderId;
        setModalData(response);
    
        if (response.orderId) {
            // Loop to add order items according to orderId
            for (const cartItem of cartItems) {
                const orderItem = {
                    order: {
                        orderId: orderId,
                    },
                    product: {
                        productId: cartItem.product.productId,
                    },
                    quantity: cartItem.quantity,
                    price: cartItem.product.price * cartItem.quantity,
                };
                await dispatch(addOrderItem(token, orderItem));
            }
            // Clear the cart after placing the order
            await dispatch(clearCart());
            navigate('/user/followorder');
        } else {
            alert("ไม่สามารถสั่งซื้อได้: " + response.error);
        }
    };

    return (
        <>
            <div className="container card">
                <div className="card-body">
                    <h4>ชำระเงินสำหรับรถเข็นสินค้า</h4>
                    <div className="row">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>รูปสินค้า</th>
                                    <th>ชื่อสินค้า</th>
                                    <th>ราคา</th>
                                    <th>จำนวน</th>
                                    <th>ราคารวม</th>
                                    <th>ลบ</th>
                                </tr>
                            </thead>
                            {cartItems.length === 0 ? (
                                <p>รถเข็นของคุณว่างเปล่า.</p>
                            ) : (
                                <tbody>
                                    {cartItems.map((item, key) => <CartItem key={key} data={item} />)}
                                </tbody>
                            )}
                        </table>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>ยอดรวม: {totalAmount}</p>
                            <p>ราคารวม: ฿{totalPrice.toFixed(2)}</p>
                            <center>
                                <button className="btn btn-primary btn-lg" onClick={handlePlaceOrder}>
                                    สั่งซื้อ
                                </button>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
