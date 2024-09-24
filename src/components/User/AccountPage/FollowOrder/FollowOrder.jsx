import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveOrders } from '../../../../actions/orders';
import { Col, Button } from 'react-bootstrap';
import { useAuth } from '../../../../auth/AuthContext';
import ViewModal from './ViewModal';

const FollowOrder = () => {
    const dispatch = useDispatch();
    const { token, customer } = useAuth();
    
    // Safely initialize orders as an array
    const orders = useSelector((state) => Array.isArray(state.orders) ? state.orders : []);

    const handleRefreshOrders = () => {
        if (customer && customer.customerId) {
            dispatch(retrieveOrders(token, customer.customerId));
        }
    };

    useEffect(() => {
        handleRefreshOrders();
    }, [dispatch, customer, token]);

    const [showView, setShowView] = useState(false);
    const handleCloseView = () => setShowView(false);
    const [modalData, setModalData] = useState(null);

    const handleShowView = (order) => {
        setModalData(order);
        setShowView(true);
    };

    return (
        <Col md={9} className="p-4">
            <div className="card shadow-lg bg-body rounded">
                <h4 className="card-header">ยืนยันติดตามคำสั่งซื้อ</h4>
                <div className="card-body">
                    <div className="crud">
                        <div className="row">
                            <div className="table-responsive">
                                <table className="table table-striped table-hover table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Order ID</th>
                                            <th>สถานะการจัดส่ง</th>
                                            <th>สถานะคำสั่งซื้อ</th>
                                            <th>วันที่สั่งซื้อ</th>
                                            <th>ยอดรวม</th>
                                            <th>รายละเอียด</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.length === 0 ? (
                                            <tr>
                                                <td colSpan="6">ไม่พบคำสั่งซื้อ.</td>
                                            </tr>
                                        ) : (
                                            orders.map((order) => (
                                                <tr key={order.orderId}>
                                                    <td>{order.orderId}</td>
                                                    <td>{order.shippingStatus}</td>
                                                    <td>{order.status}</td>
                                                    <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                                                    <td>${order.totalAmount.toFixed(2)}</td>
                                                    <td>
                                                        <Button className='btn btn-primary' onClick={() => handleShowView(order)}>รายละเอียด</Button>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <ViewModal show={showView} handleClose={handleCloseView} modaldata={modalData} />
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default FollowOrder;
