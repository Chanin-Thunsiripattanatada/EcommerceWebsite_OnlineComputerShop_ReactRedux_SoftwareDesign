import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserInfo, updateUser, clearUser } from '../../stores/UserInfo';

import { fetchCustomerInfo, fetchUserInfo } from '../../stores/UserInfo';
import OrderPage from '../Order/OrderPage';

const AccountPage = () => {
    const dispatch = useDispatch();
    const { id, username, email, roles, customerInfo } = useSelector((state) => state.user);
      
    useEffect(() => {
        dispatch(fetchUserInfo(sessionStorage.getItem("userId")));
        dispatch(fetchCustomerInfo(sessionStorage.getItem("customerId")));
    }, [dispatch, id]);

    console.log("user : " + username)
    console.log("cus info : " + customerInfo);

    return (
        <div>
            <h2>User Information</h2>
            <p><strong>ID:</strong> {id}</p>
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Email:</strong> {email}</p>


            
            <h2>Customer Information</h2>
            <p><strong>ID:</strong> {customerInfo.customerId}</p>
            <p><strong>FirstName:</strong> {customerInfo.firstName}</p>
            <p><strong>Lastname:</strong> {customerInfo.lastName}</p>
            <p><strong>Email:</strong> {customerInfo.email}</p>
            <p><strong>Shipping Address:</strong> {customerInfo.shippingAddress}</p>
            <p><strong>Billing Address:</strong> {customerInfo.billingAddress}</p>

            <OrderPage />

        </div>
    );
};

export default AccountPage;
