import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ViewModal = ({ show, handleClose, modaldata }) => {
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
                        <p><strong>ที่อยู่การจัดส่ง:</strong> {modaldata.customer?.shippingAddress}</p>
                        <p><strong>ที่อยู่ในการเรียกเก็บเงิน:</strong> {modaldata.customer?.billingAddress}</p>
                        <p><strong>วันที่สั่งซื้อ:</strong> {new Date(modaldata.orderDate).toLocaleString()}</p>
                        <p><strong>จำนวนเงินรวม:</strong> ${modaldata.totalAmount.toFixed(2)}</p>
                        <p><strong>สถานะการจัดส่ง:</strong> {modaldata.shippingStatus}</p>
                        <p><strong>สถานะ:</strong> {modaldata.status || "ไม่มีข้อมูล"}</p>
                        <p><strong>วันที่ยืนยัน:</strong> {modaldata.verificationDate ? new Date(modaldata.verificationDate).toLocaleString() : "ไม่มีข้อมูล"}</p>
                        <p><strong>หมายเหตุจากผู้ดูแล:</strong> {modaldata.adminNote || "ไม่มีข้อมูล"}</p>
                        <h5>รายการสินค้าในคำสั่งซื้อ:</h5>
                        <ul>
                            {modaldata.orderItems && modaldata.orderItems.length > 0 ? (
                                modaldata.orderItems.map((item) => (
                                    <li key={item.orderItemId}>
                                        <strong>{item.product?.name || "ชื่อสินค้าไม่ระบุ"}</strong> - จำนวน: {item.quantity} - ราคา: ${item.price?.toFixed(2) || "ไม่มีข้อมูล"}
                                    </li>
                                ))
                            ) : (
                                <li>ไม่พบรายการสินค้าในคำสั่งซื้อ.</li>
                            )}
                        </ul>
                        <p><strong>ภาพส่วนตัว:</strong></p> 
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
