import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCustomer, getCustomerById } from '../../redux/actions/customer'; // Assuming you have these actions
import { useNavigate } from 'react-router-dom';

const EditCustomerDetail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = sessionStorage.getItem("authToken");
    const customerId = sessionStorage.getItem("customerId");
    const customer = useSelector((state) => state.customer);

    // Local state for form inputs
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        shippingAddress: '',
        billingAddress: '',
    });

    // Pre-fill form with existing customer data
    useEffect(() => {
        if (customer) {
            setFormData({
                firstName: customer.firstName || '',
                lastName: customer.lastName || '',
                email: customer.email || '',
                shippingAddress: customer.shippingAddress || '',
                billingAddress: customer.billingAddress || '',
            });
        }
    }, [customer]);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedData = {
            customerId,
            ...formData,
        };
        navigate("/user")
        dispatch(updateCustomer(token, customerId, updatedData));
    };

    return (
        <div>
            <h2>Edit Customer Details</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Shipping Address:</label>
                    <input
                        type="text"
                        name="shippingAddress"
                        value={formData.shippingAddress}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Billing Address:</label>
                    <input
                        type="text"
                        name="billingAddress"
                        value={formData.billingAddress}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Update Details</button>
            </form>
        </div>
    );
};

export default EditCustomerDetail;
