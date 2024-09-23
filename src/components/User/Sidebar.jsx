// Sidebar.js
import React from 'react';
import { Container, Col } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext'; // นำเข้า useAuth

const AccountSidebar = () => {
    const { userLogout } = useAuth(); // ใช้ userLogout จาก AuthContext

    const handleLogout = () => {
        userLogout();
        window.location.href = '/'; // เปลี่ยนเส้นทางไปยังหน้าแรกหลังจากออกจากระบบ
    };

    return (
        <Container fluid className="bg-grey text-gray-900 min-vh-100 d-flex">
            <Col md={3} className="p-4 text-white" style={{ backgroundColor: 'grey' }}>
                <h2 className="h4 font-weight-bold mb-4">เมนูลูกค้า</h2>
                <ul className="list">
                    <li className="mb-2">
                        <Link to="./info" className="h6">ข้อมูลผู้ใช้</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="./update" className="h6">แก้ไขข้อมูลลูกค้า</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="./followorder" className="h6">ติดตามคำสั่งซื้อ</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="./orderhistory" className="h6">ประวัติคำสั่งซื้อ</Link>
                    </li>
                    <li>
                        <Link to="#" className="h6" onClick={handleLogout}>ออกจากระบบ</Link>
                    </li>
                </ul>
            </Col>
            <Outlet />
        </Container>
    );
};

export default AccountSidebar;
