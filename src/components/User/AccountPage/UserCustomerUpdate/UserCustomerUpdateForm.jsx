import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useAuth } from '../../../../auth/AuthContext';
import axios from 'axios';

const CustomerUpdateForm = () => {
  const { token, customer, userLogin } = useAuth(); // ดึงเฉพาะข้อมูล customer
  const [customerData, setCustomerData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (customer) {
      setCustomerData(customer);
    }
  }, [customer]);

  const handleCustomerChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // อัปเดตข้อมูลลูกค้าผ่าน API
      const customerResponse = await axios.put(
        `http://localhost:8080/api/user/customers/${customerData.customerId}`, // ใช้ customerData.id
        customerData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // ใช้ token ของ customer สำหรับการตรวจสอบสิทธิ์
          },
        }
      );

      // อัปเดตข้อมูลใน local storage และ context
      const { customer } = customerResponse.data;
      localStorage.setItem('customer',customer);
      setSuccess('การอัปเดตข้อมูลลูกค้าสำเร็จ');
    } catch (error) {
      setError('การอัปเดตล้มเหลว: ' + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="p-2">
      <h2>อัปเดตข้อมูลลูกค้า</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <Form.Group controlId="formFirstName" className="mb-3">
        <Form.Label>ชื่อจริง</Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          value={customerData.firstName || ''}
          onChange={handleCustomerChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formLastName" className="mb-3">
        <Form.Label>นามสกุล</Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          value={customerData.lastName || ''}
          onChange={handleCustomerChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formShippingAddress" className="mb-3">
        <Form.Label>ที่อยู่จัดส่ง</Form.Label>
        <Form.Control
          type="text"
          name="shippingAddress"
          value={customerData.shippingAddress || ''}
          onChange={handleCustomerChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBillingAddress" className="mb-3">
        <Form.Label>ที่อยู่เรียกเก็บเงิน</Form.Label>
        <Form.Control
          type="text"
          name="billingAddress"
          value={customerData.billingAddress || ''}
          onChange={handleCustomerChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3" disabled={loading}>
        {loading ? 'กำลังอัปเดต...' : 'อัปเดต'}
      </Button>
    </Form>
  );
};

export default CustomerUpdateForm;
