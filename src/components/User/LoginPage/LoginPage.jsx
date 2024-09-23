// Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
const LoginPage = () => {


    return (
        <section className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="card-body p-md-5 mx-md-4">
                                        <div className="text-center">
                                            <img
                                                src={require("../../../assets/image/SD_LOGO.png")}
                                                style={{ width: "185px" }}
                                                alt="logo" />
                                            <h4 className="mt-1 mb-5 pb-1">We are The ComCraft Team</h4>
                                        </div>
                                        {/* Component */}
                                        <LoginForm />
                                        {/* Component */}
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                    <div className="text px-3 py-4 p-md-5 mx-md-4">
                                        <h4 className="mb-4">We are more than just a company</h4>
                                        <p className="small mb-0">
                                            ยินดีต้อนรับสู่ <strong>ComCraft</strong> ร้านคอมพิวเตอร์ที่ตอบโจทย์ทุกความต้องการด้านเทคโนโลยีของคุณ!
                                            พบกับสินค้าคุณภาพสูงตั้งแต่คอมพิวเตอร์ โน้ตบุ๊ก อุปกรณ์เสริม และอีกมากมาย พร้อมทีมงานผู้เชี่ยวชาญที่พร้อมให้คำแนะนำและบริการคุณ
                                            <br />เพียงแค่คุณ <Link to="/register">ลงทะเบียน</Link> วันนี้ เพื่อรับสิทธิพิเศษต่าง ๆ เช่น ส่วนลดสมาชิก โปรโมชั่นสุดคุ้ม และอัปเดตข่าวสารใหม่ล่าสุดจาก ComCraft!
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default LoginPage;
