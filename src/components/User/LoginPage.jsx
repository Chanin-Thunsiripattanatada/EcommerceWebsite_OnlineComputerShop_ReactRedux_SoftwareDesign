// Login.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { setCustomerInfo, setUserInfo } from '../../stores/UserInfo';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const login = {
            username,
            password,
          };
      
          try {
            const response = await axios.post('http://localhost:8080/api/auth', login);
            console.log('Login successful:', response.data);
            setSuccess('Login successful! let`s shopping!');
            setError('');
            //or localStorage
            sessionStorage.setItem('authToken', response.data.token);
            sessionStorage.setItem('userId', response.data.user.id);
            sessionStorage.setItem('customerId', response.data.customer.customerId);

            console.log("user : " + JSON.stringify(response.data.user, null, 2))
            console.log("customer : " + JSON.stringify(response.data.customer, null, 2))

            dispatch(setUserInfo(response.data.user));
            dispatch(setCustomerInfo(response.data.customer));
            
            await new Promise((resolve) => setTimeout(resolve, 1000));
            navigate('/');
          } catch (error) {
            console.error('Login failed:', error.response);
            const errorMessage = error.response?.data?.message || 'Login failed.';
            setError(errorMessage);
            setSuccess('');
          }
    };

    return (
        <div className="login-container">
        <h2>Login</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <Link to="/register">Register</Link>
        </form>
        </div>
    );
};

export default LoginPage;
