// UserCustomerUpdatePage.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Sidebar from '../../Sidebar'; // Import Sidebar
import UserCustomerUpdateForm from './UserCustomerUpdateForm';
import { useAuth } from '../../../../auth/AuthContext';
import { Outlet } from 'react-router-dom';

const UserCustomerUpdatePage = () => {
    return (
        <>
            <Col md={9} className="p-4">
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <UserCustomerUpdateForm />
                            </div>
                    </div>
                    
                </div>
                    
            </Col>
        </>
    );
};

export default UserCustomerUpdatePage;