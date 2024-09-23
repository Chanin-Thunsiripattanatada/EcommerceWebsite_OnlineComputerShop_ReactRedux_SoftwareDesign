import React from "react";

const PartnerCarousel = () => {
    const cardStyle = {
        height: '300px',
        marginBottom: '20px',
        border: 'none',
        borderRadius: '10px',
        overflow: 'hidden',
    };

    const imgStyle = {
        height: '150px',
        objectFit: 'cover',
        width: '100%',
    };

    return (
        <>
            <hr />
            <div className="container gap-3">
                <h3>Partner ของร้าน</h3>
                <div id="partnerCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-md-4 p-2">
                                    <div className="card" style={cardStyle}>
                                        <img
                                            alt="Gigabyte (Aorus)"
                                            src={require('../../assets/image/aorus.jpg')}
                                            style={imgStyle}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">Gigabyte (Aorus)</h5>
                                            <p className="card-text">
                                                เป็นที่รู้จักในด้านการผลิตการ์ดจอและเมนบอร์ดที่มีประสิทธิภาพสูง เหมาะสำหรับนักเล่นเกมที่ต้องการการประมวลผลกราฟิกที่ยอดเยี่ยมและความเสถียรในการใช้งาน
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 p-2">
                                    <div className="card" style={cardStyle}>
                                        <img
                                            alt="Corsair"
                                            src={require('../../assets/image/id2mAvzy_F_logos.jpeg')}
                                            style={imgStyle}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">Corsair</h5>
                                            <p className="card-text">
                                                โดดเด่นด้วยอุปกรณ์เกมมิ่งที่มีคุณภาพสูง เช่น คีย์บอร์ดและเมาส์ที่ออกแบบมาเพื่อเพิ่มประสิทธิภาพในการเล่นเกม ด้วยฟีเจอร์ที่ตอบโจทย์นักเล่นเกมอย่างแท้จริง
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 p-2">
                                    <div className="card" style={cardStyle}>
                                        <img
                                            alt="Razer"
                                            src={require('../../assets/image/razer.jpg')}
                                            style={imgStyle}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">Razer</h5>
                                            <p className="card-text">
                                                มีชื่อเสียงในกลุ่มเกมมิ่ง มีดีไซน์ล้ำสมัยฟีเจอร์เฉพาะที่ช่วยยกระดับประสบการณ์การเล่นเกม แล็ปท็อปที่มีประสิทธิภาพและอุปกรณ์เสริมที่ตอบโจทย์ทุกความต้องการของผู้เล่น
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-4 p-2">
                                    <div className="card" style={cardStyle}>
                                        <img
                                            alt="MSI"
                                            src={require('../../assets/image/msi.jpg')}
                                            style={imgStyle}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">MSI</h5>
                                            <p className="card-text">
                                                เชี่ยวชาญด้านคอมพิวเตอร์เกมมิ่งที่มีความสามารถในการประมวลผลสูงและการ์ดจอที่ทันสมัย ทำให้การเล่นเกมเป็นไปอย่างราบรื่นและมีประสิทธิภาพ
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 p-2">
                                    <div className="card" style={cardStyle}>
                                        <img
                                            alt="Asus (ROG)"
                                            src={require('../../assets/image/rog.jpg')}
                                            style={imgStyle}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">Asus (ROG)</h5>
                                            <p className="card-text">
                                                สายผลิตภัณฑ์ ROG มีการออกแบบที่ทันสมัยและฟีเจอร์ที่มุ่งเน้นการเล่นเกม ทำให้ผู้ใช้ได้รับประสบการณ์การเล่นเกมที่ดีที่สุด ด้วยความทนทานและประสิทธิภาพที่เหนือชั้น
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#partnerCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#partnerCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default PartnerCarousel;
