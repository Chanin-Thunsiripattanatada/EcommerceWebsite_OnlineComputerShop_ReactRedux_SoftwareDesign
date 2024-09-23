import React, { useEffect, useState } from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../../../auth/AuthContext';
import { updateOrder } from '../../../../actions/orders';

const ViewModal = ({ show, handleClose, modaldata }) => {
    const dispatch = useDispatch();
    const { token } = useAuth();

    const [file, setFile] = useState(null);
    const [fileupload, setFileupload] = useState(null);

    useEffect(() => {
        if (show) {
            setFile(null);
            setFileupload(null);
        }
    }, [show, modaldata]);

    const handleChangeImage = (e) => {
        e.preventDefault();
        if (e.target.files.length !== 0) {
            setFile(URL.createObjectURL(e.target.files[0]));
            setFileupload(e.target.files[0]);
        } else {
            setFile(null);
            setFileupload(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('imageFile', fileupload);

        try {
            await dispatch(updateOrder(token, modaldata?.orderId, form));
            handleClose(); // Close modal after submission
        } catch (error) {
            console.error('Error:', error);
            alert('เกิดข้อผิดพลาด.');
        }
    };

    return (
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>ดูคำสั่งซื้อ</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {modaldata ? (
                    <>
                        <p><strong>รหัสคำสั่งซื้อ:</strong> {modaldata.orderId}</p>
                        <p><strong>ลูกค้า:</strong> {modaldata.customer?.firstName} {modaldata.customer?.lastName}</p>
                        <p><strong>อีเมล:</strong> {modaldata.customer?.email}</p>
                        <p><strong>ที่อยู่จัดส่ง:</strong> {modaldata.customer?.shippingAddress}</p>
                        <p><strong>ที่อยู่สำหรับเรียกเก็บเงิน:</strong> {modaldata.customer?.billingAddress}</p>
                        <p><strong>วันที่สั่งซื้อ:</strong> {new Date(modaldata.orderDate).toLocaleString()}</p>
                        <p><strong>ยอดรวม:</strong> ${modaldata.totalAmount.toFixed(2)}</p>
                        <p><strong>สถานะการจัดส่ง:</strong> {modaldata.shippingStatus}</p>
                        <h5>รายการคำสั่งซื้อ:</h5>
                        <ul>
                            {modaldata.orderItems && modaldata.orderItems.length > 0 ? (
                                modaldata.orderItems.map((item) => (
                                    <li key={item.orderItemId}>
                                        <strong>{item.product.name}</strong> - จำนวน: {item.quantity} - ราคา: ${item.price.toFixed(2)}
                                    </li>
                                ))
                            ) : (
                                <li>ไม่พบรายการคำสั่งซื้อ.</li>
                            )}
                        </ul>

                        <h2>อัปโหลดภาพส่วนตัว</h2>
                        {/* Show existing private image if available */}
                        {modaldata.privateImage ? (
                            <div>
                                <p><strong>ภาพที่อัปโหลดแล้ว:</strong></p>
                                <img 
                                    src={`http://localhost:8080/api/privateimage/${modaldata.privateImage.id}`} // Adjust this based on your API response
                                    alt="Uploaded"
                                    className='img-fluid mb-3'
                                />
                            </div>
                        ) : null}

                        <Form onSubmit={handleSubmit} encType="multipart/form-data">
                            <Form.Group as={Row} className="p-3" controlId="imageFile">
                                <Form.Label column sm={2}>อัปโหลดภาพ</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        type="file"
                                        name="imageFile"
                                        accept="image/*"
                                        onChange={handleChangeImage}
                                    />
                                    {file && <img src={file} className='img-fluid mt-2' alt="Preview" />}
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Button type="submit">ส่ง</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </>
                ) : (
                    <>ไม่พบข้อมูล</>
                )}
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    ปิด
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ViewModal;
