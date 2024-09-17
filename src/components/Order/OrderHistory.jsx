import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderRecord from './OrderRecord';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/orders')
            .then(response => setOrders(response.data))
            .catch(error => console.error('Error fetching orders:', error));
    }, []);

    return (
        <div>
            <h2>Order History</h2>
            {/*{orders.map(order => (
                <OrderRecord key={order.orderId} order={order} />
            ))}*/}
            
        </div>
    );
};

export default OrderHistory;
