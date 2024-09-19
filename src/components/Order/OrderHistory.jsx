import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderRecord from './OrderRecord';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveOrders } from '../../redux/actions/orders';

const OrderHistory = () => {
    //const [orders, setOrders] = useState([]);

    /*useEffect(() => {
        axios.get('http://localhost:8080/api/orders')
            .then(response => setOrders(response.data))
            .catch(error => console.error('Error fetching orders:', error));
    }, []);*/

    const dispatch = useDispatch();
    const orders = useSelector((state => state.orders));
    console.log("ORDERS === " + orders)

    const token = sessionStorage.getItem("authToken");
    const customerId = sessionStorage.getItem("customerId");

    const handleRefreshorders = async () => {
        dispatch(retrieveOrders(token, customerId));
    };

    useEffect(() => {
        handleRefreshorders();
    }, [dispatch]);

    return (
        <div>
            <h2>Order History</h2>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Total Amount</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <OrderRecord key={order.orderId} order={order} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderHistory;
