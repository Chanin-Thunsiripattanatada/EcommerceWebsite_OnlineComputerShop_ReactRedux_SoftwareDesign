import React, { useState, useEffect } from 'react';
import CartItem from '../CartPage/CartItem';

const OrderRecord = ({ order }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="order-record">
            <div className="order-summary" onClick={toggleExpand}>
                <h3>Order #{order.orderId}</h3>
                <p><strong>Date:</strong> {new Date(order.orderDate).toLocaleDateString()}</p>
                <p><strong>Status:</strong> {order.shippingStatus}</p>
                <p><strong>Total:</strong> ${order.totalAmount.toFixed(2)}</p>
                <button>{isExpanded ? 'Hide Details' : 'Show Details'}</button>
            </div>
            
            {isExpanded && (
                <div className="order-items">
                    <h4>Order Items</h4>
                    {order.orderItems.map(item => (
                        <CartItem key={item.itemId} data={item} />
                    ))}
                </div>
            )}
        </div>
    );
};


export default OrderRecord;