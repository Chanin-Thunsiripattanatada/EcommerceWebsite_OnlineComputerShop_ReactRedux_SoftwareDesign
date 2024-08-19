// Header.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Offcanvas navbar large">
          <div className="container-fluid m-1">
            <Link className="navbar-brand" to="#"><img src={require('../assets/image/logo192.png')} width={"75px"} height={"75px"} alt="" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
              <img src={require('../assets/image/menu.png')} width={"40px"} height={"40px"} alt="" />
            </button>
            <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasNavbar2" data-bs-scroll="true" data-bs-backdrop="false" aria-labelledby="offcanvasNavbar2Label">
              <div className="offcanvas-header">
                <img src={require('../assets/image/logo192.png')} width={"75px"} height={"75px"} alt="" />
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <form className="d-flex mt-3 mt-lg-0" role="search" onSubmit={(e) => e.preventDefault()}>
                  <input className="form-control me-2" type="search" placeholder="ค้นหาสินค้า" aria-label="Search" />
                  <button className="btn btn-outline-success" data-bs-dismiss="offcanvas" type="submit">ค้นหา</button>
                </form>
                <br/>
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  
                  <li className="nav-item align-self-center">
                    {/* route เส้นทางไปที่หน้าแรก */}
                    <Link className="nav-link active" data-bs-dismiss="offcanvas" aria-current="page" to="/">หน้าแรก</Link>
                  </li>

                  <li className="nav-item dropdown align-self-center">
                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      สินค้าทั้งหมด
                    </Link>
                    {/* เมนูเลือก catagory ใช้ component เดียว */}
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="#" data-bs-dismiss="offcanvas">จอภาพ (Monitor)</Link></li>
                      <li><Link className="dropdown-item" to="#" data-bs-dismiss="offcanvas">เคส (Case)</Link></li>
                      <li><Link className="dropdown-item" to="#" data-bs-dismiss="offcanvas">พาวเวอร์ซัพพลาย (Power Supply)</Link></li>
                      <li><Link className="dropdown-item" to="#" data-bs-dismiss="offcanvas">คีย์บอร์ด (Keyboard)</Link></li>
                      <li><Link className="dropdown-item" to="#" data-bs-dismiss="offcanvas">เมนบอร์ด (Main board)</Link></li>
                      <li><Link className="dropdown-item" to="#" data-bs-dismiss="offcanvas">CPU (ซีพียู)</Link></li>
                      <li><Link className="dropdown-item" to="#" data-bs-dismiss="offcanvas">การ์ดจอ (Graphic Card)</Link></li>
                      <li><Link className="dropdown-item" to="#" data-bs-dismiss="offcanvas">แรม (Ram)</Link></li>
                      <li><Link className="dropdown-item" to="#" data-bs-dismiss="offcanvas">ฮาร์ดดิส (Harddisk)</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item align-self-center">
                    <Link className="nav-link" to="#" data-bs-dismiss="offcanvas">บริการ</Link>
                  </li>
                  <li className="nav-item align-self-center">
                    <Link className="nav-link" to="#" data-bs-dismiss="offcanvas">เงื่อนไขการรับประกัน</Link>
                  </li>
                  <li className="nav-item align-self-center">
                    <Link className="nav-link" to="#" data-bs-dismiss="offcanvas">ติดต่อเรา</Link>
                  </li>
                  <li className="nav-item align-self-center">
                    <Link className="nav-link" to="/ตระกร้าสินค้า" data-bs-dismiss="offcanvas"><img src={require('../assets/image/shopping_cart_icon_177373.png')} width={"50px"} height={"50px"} alt="" /></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
