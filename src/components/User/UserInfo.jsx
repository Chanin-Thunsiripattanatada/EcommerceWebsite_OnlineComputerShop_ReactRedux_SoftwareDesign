import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserInfo, updateUser, clearUser } from '../../stores/UserInfo';

const UserInfo = () => {
    const dispatch = useDispatch();
    const { id, username, email, roles } = useSelector((state) => state.user);
    
    const handleUpdateUser = () => {
        dispatch(updateUser({ username: 'newUsername', email: 'newEmail@example.com' }));
    };

    const handleClearUser = () => {
        dispatch(clearUser());
    };

    useEffect(() => {
        const userInfo = {
            id: 1,
            username: 'johndoe',
            password: 'password123',
            email: 'johndoe@example.com',
            roles: ['user', 'admin'],
        };
        dispatch(setUserInfo(userInfo));
    }, [dispatch]);

    return (
        <div>
            <h2>User Information</h2>
            <p><strong>ID:</strong> {id}</p>
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Roles:</strong> {roles.join(', ')}</p>
            <button onClick={handleUpdateUser}>Update User Info</button>
            <button onClick={handleClearUser}>Clear User Info</button>
        </div>
    );
};

export default UserInfo;
