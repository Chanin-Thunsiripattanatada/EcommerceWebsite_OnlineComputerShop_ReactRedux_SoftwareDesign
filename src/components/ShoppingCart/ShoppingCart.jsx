import React, { useState } from 'react';

const ShoppingCart = () => {
  const [address, setAddress] = useState('');

  const handleOrderSubmit = () => {
    console.log("Order submitted for address:", address);
    // Add your order submission logic here
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="row mt-4">
        <div className="col text-center">
          <h2>ตะกร้าสินค้า</h2>
        </div>
      </div>

      <div className="row mt-4">
        {/* First Product */}
        <div className="col-12 d-flex align-items-center border-bottom pb-3 mb-3">
          {/* Product Image and Name */}
          <div className="d-flex align-items-center" style={{ width: '30%' }}>
            <div className="border" style={{ width: '100px', height: '100px' }}></div>
            <div className="ms-4">
              <h5>ชื่อสินค้า</h5>
              <p>XXXXX</p>
            </div>
          </div>

          {/* Product Details */}
          <div className="text-center" style={{ width: '40%' }}>
            <h5>รายละเอียด</h5>
            <p>ประเภทสินค้า: XXXX<br />
              Warranty: XX/XX/XX<br />
              รายละเอียดเพิ่มเติม
            </p>
          </div>

          {/* Product Price */}
          <div className="ms-auto d-flex flex-column justify-content-center text-end" style={{ width: '20%' }}>
            <h5>ราคา</h5>
          </div>
        </div>

        {/* Second Product */}
        <div className="col-12 d-flex align-items-center border-bottom pb-3 mb-3">
          {/* Product Image and Name */}
          <div className="d-flex align-items-center" style={{ width: '30%' }}>
            <div className="border" style={{ width: '100px', height: '100px' }}></div>
            <div className="ms-4">
              <h5>ชื่อสินค้า</h5>
              <p>XXXXX</p>
            </div>
          </div>

          {/* Product Details */}
          <div className="text-center" style={{ width: '40%' }}>
            <h5>รายละเอียด</h5>
            <p>ประเภทสินค้า: XXXX<br />
              Warranty: XX/XX/XX<br />
              รายละเอียดเพิ่มเติม
            </p>
          </div>

          {/* Product Price */}
          <div className="ms-auto d-flex flex-column justify-content-center text-end" style={{ width: '20%' }}>
            <h5>ราคา</h5>
          </div>
        </div>
      </div>

      {/* Shipping and Total */}
      <div className="row mt-4">
        <div className="col-12 col-sm-6">
          <div className="mb-3">
            <label htmlFor="shippingAddress" className="form-label">ที่อยู่ :</label>
            <input
              type="text"
              className="form-control"
              id="shippingAddress"
              placeholder="กรอกที่อยู่ของคุณ"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>

        <div className="col-12 col-sm-6 text-end">
          <h5>ราคารวม: <span>XXXX</span></h5>
        </div>
      </div>

      {/* Order Button */}
      <div className="row mt-4">
        <div className="col d-flex justify-content-end">
          <button className="btn btn-primary btn-lg" onClick={handleOrderSubmit}>
            สั่งซื้อสินค้า
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
