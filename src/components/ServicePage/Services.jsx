import React from 'react';

const Services = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">บริการของเรา</h2>
      <hr />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">1. การให้คำปรึกษา</h5>
              <p className="card-text">
                เรามีทีมงานผู้เชี่ยวชาญที่พร้อมให้คำปรึกษาเกี่ยวกับการเลือกซื้อสินค้าไอทีและอุปกรณ์คอมพิวเตอร์ที่เหมาะสมกับความต้องการของคุณ
              </p>

              <h5 className="card-title">2. การติดตั้งและซ่อมแซม</h5>
              <p className="card-text">
                เรามีบริการติดตั้งและซ่อมแซมอุปกรณ์คอมพิวเตอร์และระบบเครือข่าย โดยทีมงานที่มีประสบการณ์
              </p>

              <h5 className="card-title">3. การรับประกันสินค้า</h5>
              <p className="card-text">
                ทุกสินค้าที่จำหน่ายมีการรับประกันคุณภาพ และสามารถเคลมได้ตามเงื่อนไขที่ระบุ
              </p>

              <h5 className="card-title">4. การบริการหลังการขาย</h5>
              <p className="card-text">
                ทีมงานบริการลูกค้าของเราพร้อมให้บริการและแก้ไขปัญหาหลังการขายเพื่อให้คุณพอใจสูงสุด
              </p>

              <h5 className="card-title">5. โปรโมชั่นและส่วนลด</h5>
              <p className="card-text">
                เรามีโปรโมชั่นและส่วนลดพิเศษสำหรับลูกค้าใหม่และลูกค้าประจำ สามารถติดตามข้อมูลได้ที่เว็บไซต์
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
