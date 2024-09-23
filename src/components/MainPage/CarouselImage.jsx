import React from "react";

const CarouselImage = () => {
    return (

        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={require('../../assets/image/carousal_image.jpg')} class="d-block w-100 img-fluid" height={700}  alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>เลือกคอมพิวเตอร์ที่ใช่สำหรับทุกความต้องการของคุณ!</h5>
                        <p>รับคำปรึกษาจากผู้เชี่ยวชาญ พร้อมช่วยคุณเลือกสเปคที่เหมาะสมที่สุด</p>
                        <button type="button" className="btn btn-secondary">ดูข้อมูลเพิ่มเติม</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={require('../../assets/image/carousal_image1.jpg')} class="d-block w-100 img-fluid" height={700} alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>เชื่อมต่อประสบการณ์ใหม่ด้วยอุปกรณ์ไอทีล่าสุด ตอบโจทย์ทั้งการทำงานและความบันเทิง</h5>
                        <p>การันตีคุณภาพด้วยบริการหลังการขายที่ดีที่สุด รับประกันนานสูงสุด 3 ปี</p>
                        <button type="button" className="btn btn-secondary">ดูข้อมูลเพิ่มเติม</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={require('../../assets/image/carousal_image2.jpg')} class="d-block w-100 img-fluid" height={700} alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>ซื้อวันนี้ ส่งฟรีทั่วประเทศ แถมฟรีอุปกรณ์เสริมสุดคุ้ม!</h5>
                        <p>รับประกันความพึงพอใจ หรือคืนเงินภายใน 30 วัน</p>
                        <button type="button" className="btn btn-secondary">ดูข้อมูลเพิ่มเติม</button>
                    </div>

                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
};

export default CarouselImage;