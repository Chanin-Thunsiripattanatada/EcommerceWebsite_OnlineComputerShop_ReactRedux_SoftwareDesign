// RegisterPage.js
import React, { useState } from 'react';
import { useAuth } from '../../../auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const RegisterPage = () => {
  const { register } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('รหัสผ่านไม่ตรงกัน!');
      return;
    }

    const registrationUserDto = {
      username,
      password,
      confirmPassword,
      email,
      firstName,
      lastName,
      shippingAddress,
      billingAddress,
    };

    try {
      // ขั้นตอนที่ 1: ลงทะเบียนผู้ใช้และรับโทเค็น
      const { token } = await register(registrationUserDto);

      // ขั้นตอนที่ 2: เพิ่มลูกค้าโดยใช้โทเค็น
      const customerData = {
        firstName,
        lastName,
        email, // หรือฟิลด์ที่ต้องการอื่น ๆ
        shippingAddress,
        billingAddress,
      };

      const customerResponse = await axios.post(
        'http://localhost:8080/api/user/customers',
        customerData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // ใช้โทเค็นที่นี่
          },
        }
      );
      const { customer } = customerResponse.data;
      // บันทึกข้อมูลลูกค้าใน localStorage
      localStorage.setItem('customer', JSON.stringify(customer));

      setSuccess('การลงทะเบียนและการสร้างลูกค้าสำเร็จ! กำลังเปลี่ยนเส้นทางไปยังหน้าเข้าสู่ระบบ...');
      setError('');
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate('/login');
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'การลงทะเบียนล้มเหลว.';
      setError(errorMessage);
      setSuccess('');
    }
  };

  return (
    <main>
      <section className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="card-body">
                  <h2>ลงทะเบียน</h2>
                  {error && <Alert variant="danger">{error}</Alert>}
                  {success && <Alert variant="success">{success}</Alert>}
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="firstName">
                      <Form.Label>ชื่อ</Form.Label>
                      <Form.Control
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="lastName">
                      <Form.Label>นามสกุล</Form.Label>
                      <Form.Control
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="username">
                      <Form.Label>ชื่อผู้ใช้</Form.Label>
                      <Form.Control
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>อีเมล</Form.Label>
                      <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                      <Form.Label>รหัสผ่าน</Form.Label>
                      <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="confirmPassword">
                      <Form.Label>ยืนยันรหัสผ่าน</Form.Label>
                      <Form.Control
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="shippingAddress">
                      <Form.Label>ที่อยู่จัดส่ง</Form.Label>
                      <Form.Control
                        type="text"
                        value={shippingAddress}
                        onChange={(e) => setShippingAddress(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="billingAddress">
                      <Form.Label>ที่อยู่สำหรับบิล</Form.Label>
                      <Form.Control
                        type="text"
                        value={billingAddress}
                        onChange={(e) => setBillingAddress(e.target.value)}
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      ลงทะเบียน
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RegisterPage;
