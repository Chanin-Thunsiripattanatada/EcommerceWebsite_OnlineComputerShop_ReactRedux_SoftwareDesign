import React from "react";

const AboutMePage = () => {
    return (
        <>
            <div className="container mt-5">
                <h2 className="text-center">เกี่ยวกับเรา</h2>
                <hr />
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">วิสัยทัศน์ของเรา</h5>
                                <p className="card-text">
                                    ที่ [ชื่อเว็บไซต์] เรามุ่งมั่นที่จะเป็นแหล่งข้อมูลที่ดีที่สุดสำหรับทุกคนที่มองหาสินค้าไอทีและอุปกรณ์คอมพิวเตอร์ ไม่ว่าคุณจะเป็นนักเล่นเกม นักศึกษา หรือมืออาชีพ เรามีสินค้าที่ตอบโจทย์ความต้องการของคุณ
                                </p>
                                <h5 className="card-title">ประวัติของเรา</h5>
                                <p className="card-text">
                                    ก่อตั้งขึ้นในปี [ปีที่ก่อตั้ง] โดยทีมงานที่มีความหลงใหลในเทคโนโลยี เราเริ่มต้นจากการขายสินค้าคอมพิวเตอร์เล็กๆ น้อยๆ จนปัจจุบันกลายเป็นหนึ่งในผู้จำหน่ายอุปกรณ์คอมพิวเตอร์ที่ได้รับความนิยมในประเทศไทย
                                </p>
                                <h5 className="card-title">ทำไมเลือกเรา?</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">คุณภาพสินค้า: เราคัดสรรสินค้าแต่ละชิ้นจากแบรนด์ชั้นนำเพื่อให้แน่ใจว่าคุณได้รับสินค้าที่ดีที่สุด</li>
                                    <li className="list-group-item">บริการลูกค้า: ทีมงานของเราพร้อมให้คำปรึกษาและช่วยเหลือคุณตลอด 24 ชั่วโมง</li>
                                    <li className="list-group-item">ราคาแข่งขัน: เรามุ่งมั่นที่จะเสนอราคาที่ดีที่สุดเพื่อให้ลูกค้าของเราได้รับความคุ้มค่าที่สุด</li>
                                </ul>
                                <h5 className="card-title">ติดต่อเรา</h5>
                                <p className="card-text">
                                    หากคุณมีข้อสงสัยหรือต้องการข้อมูลเพิ่มเติม สามารถติดต่อเราได้ที่:
                                </p>
                                <p className="card-text">
                                    <strong>อีเมล:</strong> [อีเมลของคุณ] <br />
                                    <strong>โทรศัพท์:</strong> [หมายเลขโทรศัพท์] <br />
                                    <strong>ที่อยู่:</strong> [ที่อยู่ของบริษัท]
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AboutMePage;