import React from 'react';
import { Col } from 'react-bootstrap';
import { useAuth } from '../../../../auth/AuthContext';

const AccountInfo = () => {
    const { user, customer } = useAuth();

    return (
        <>
            <Col md={9} className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h1 className="h3 font-weight-bold">ข้อมูลบัญชี</h1>
                </div>
                <div className="container card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <h2 className="h3 font-weight-bold">ข้อมูลผู้ใช้</h2>
                                <br />
                                <dl className="row">
                                    <dt className="col-sm-4">ชื่อผู้ใช้</dt>
                                    <dd className="col-sm-9">{user?.username || 'ไม่ระบุ'}</dd>

                                    <dt className="col-sm-4">อีเมล</dt>
                                    <dd className="col-sm-9">{user?.email || 'ไม่ระบุ'}</dd>
                                </dl>
                            </div>
                            <div className="col">
                                <h2 className="h3 font-weight-bold">ข้อมูลลูกค้า</h2>
                                <br />
                                <dl className="row">
                                    <dt className="col-sm-4">ชื่อ</dt>
                                    <dd className="col-sm-9">{customer?.firstName} {customer?.lastName}</dd>
                                    <dt className="col-sm-4">อีเมล</dt>
                                    <dd className="col-sm-9">{customer?.email}</dd>
                                    <dt className="col-sm-4">ที่อยู่จัดส่ง</dt>
                                    <dd className="col-sm-9">{customer?.shippingAddress}</dd>
                                    <dt className="col-sm-4">ที่อยู่เรียกเก็บเงิน</dt>
                                    <dd className="col-sm-9"><p>{customer?.billingAddress}</p></dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    );
};

export default AccountInfo;
