import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserInfo, updateUser, clearUser } from '../../stores/UserInfo';

import { fetchUserInfo } from '../../stores/UserInfo';
import OrderPage from '../Order/OrderPage';

import { getCustomerById } from '../../redux/actions/customer';
import { getUserById } from '../../redux/actions/user';

const AccountPage = () => {
    const dispatch = useDispatch();
    const { id, username, email, roles, customerInfo } = useSelector((state) => state.user);
    

    const token = sessionStorage.getItem("authToken");
    const customer = useSelector((state) => state.customer);
    const customerId = sessionStorage.getItem("customerId");

    const user = useSelector((state) => state.user);
    const userId = sessionStorage.getItem("userId");

    useEffect(() => {
        dispatch(getUserById(token, userId));
        dispatch(getCustomerById(token, customerId));

    }, [dispatch, customerId, userId]);

    console.log("USERRRRRRRR: : " + user)
    console.log("CUSSSSSSSSS : " + JSON.stringify(customer.user));

    return (
        <div>
            <h2>User Information</h2>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>


            
            <h2>Customer Information</h2>
            <p><strong>ID:</strong> {customer.customerId}</p>
            <p><strong>FirstName:</strong> {customer.firstName}</p>
            <p><strong>Lastname:</strong> {customer.lastName}</p>
            <p><strong>Email:</strong> {customer.email}</p>
            <p><strong>Shipping Address:</strong> {customer.shippingAddress}</p>
            <p><strong>Billing Address:</strong> {customer.billingAddress}</p>

            <OrderPage />

        </div>
    );
};

export default AccountPage;
