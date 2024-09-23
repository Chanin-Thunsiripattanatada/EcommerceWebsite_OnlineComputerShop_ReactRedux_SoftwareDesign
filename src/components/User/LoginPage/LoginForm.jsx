// Login.js
import React, { useState } from 'react';
import { useAuth } from '../../../auth/AuthContext';
import { Form, Button } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { userLogin } = useAuth();
    const { token } = useAuth();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const login = {
            username,
            password,
        };

        try {
            await userLogin(login);
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error.response);
            const errorMessage = error.response?.data?.message || 'Login failed.';
            setError(errorMessage);
            setSuccess('');
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="text-center">
            <Form.Group controlId="formEmail">
                <Form.Label className="text-center w-100">Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="mx-auto"
                    style={{ maxWidth: '300px' }}
                />
            </Form.Group>
            <br />
            <Form.Group controlId="formPassword">
                <Form.Label className="text-center w-100">Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mx-auto"
                    style={{ maxWidth: '300px' }}
                />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3 mx-auto d-block">
                Login
            </Button>
        </Form>


    );
}

export default LoginForm;
