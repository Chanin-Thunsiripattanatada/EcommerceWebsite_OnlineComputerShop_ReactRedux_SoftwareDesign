import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OrderPage from '../Order/OrderPage';

import { getCustomerById } from '../../redux/actions/customer';
import { Link } from "react-router-dom";


const AccountPage = () => {
    const dispatch = useDispatch();
    //const { id, username, email, roles, customerInfo } = useSelector((state) => state.user);

    const token = sessionStorage.getItem("authToken");
    const customer = useSelector((state) => state.customer);
    const customerId = sessionStorage.getItem("customerId");

    useEffect(() => {
        dispatch(getCustomerById(token, customerId));

    }, [dispatch, customerId]);

    return (
        <div>
            {/*<h2>User Information</h2>
            <p><strong>ID:</strong> {id}</p>
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Email:</strong> {email}</p>*/}


            
            <h2>Customer Information</h2>
            <p><strong>ID:</strong> {customer.customerId}</p>
            <p><strong>FirstName:</strong> {customer.firstName}</p>
            <p><strong>Lastname:</strong> {customer.lastName}</p>
            <p><strong>Email:</strong> {customer.email}</p>
            <p><strong>Shipping Address:</strong> {customer.shippingAddress}</p>
            <p><strong>Billing Address:</strong> {customer.billingAddress}</p>

            <OrderPage />

            <Link className="nav-link" to="/user/editCustomerDetail"> แก้ไขข้มูลลูกค้า </Link>

        </div>
    );
};

export default AccountPage;
