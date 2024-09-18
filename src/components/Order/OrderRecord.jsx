import React, { useState, useEffect } from 'react';
import OrderItem from './OrderItem';

const OrderRecord = ({ order }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <tr>
                <td>{order.orderId}</td>
                <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                <td>{order.shippingStatus}</td>
                <td>${order.totalAmount.toFixed(2)}</td>
                <td>
                    <button onClick={toggleExpand}>
                        {isExpanded ? 'Hide Details' : 'Show Details'}
                    </button>
                </td>
            </tr>
            {isExpanded && (
                <tr>
                    <td colSpan="5">
                        <table>
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {order.orderItems.map(item => (
                                    <OrderItem key={item.orderItemId} item={item} />
                                ))}
                            </tbody>
                        </table>
                    </td>
                </tr>
            )}
        </>
    );
};


export default OrderRecord;