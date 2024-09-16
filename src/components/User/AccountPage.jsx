import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserInfo, updateUser, clearUser } from '../../stores/UserInfo';

import { fetchCustomerInfo } from '../../stores/UserInfo';

const AccountPage = () => {
    const dispatch = useDispatch();
    const { id, username, email, roles, customerInfo } = useSelector((state) => state.user);
      
    useEffect(() => {
        dispatch(fetchCustomerInfo(1));
    }, [dispatch, id]);

    console.log("cus info : " + customerInfo);

    return (
        <div>
            <h2>User Information</h2>
            <p><strong>ID:</strong> {id}</p>
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Roles:</strong> {roles.join(', ')}</p>

        </div>
    );
};

export default AccountPage;
