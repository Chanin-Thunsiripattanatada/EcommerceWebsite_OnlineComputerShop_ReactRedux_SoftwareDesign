import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { retrieveProducts } from "../../actions/products";
import AddToCartButton from "../CartPage/AddToCartButton";
import ReactPaginate from 'react-paginate';

const ProductView = ({ CategoryFilter = 'All', searchFilter = "" }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products || []);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(27490);
  const [selectedManufacturer, setSelectedManufacturer] = useState('');
  const [selectedWarranty, setSelectedWarranty] = useState('');

  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12; // Adjust based on your needs

  useEffect(() => {
    dispatch(retrieveProducts());
  }, [dispatch]);

  const searchTerm = searchFilter.toLowerCase();

  const filteredProducts = products
    .filter(product => 
      CategoryFilter === 'All' || product.category?.categoryName === CategoryFilter
    )
    .filter(product => 
      searchTerm === "" || 
      product.name?.toLowerCase().includes(searchTerm) ||
      product.description?.toLowerCase().includes(searchTerm) ||
      product.category?.categoryName?.toLowerCase().includes(searchTerm)
    )
    .filter(product => 
      product.price >= minPrice && product.price <= maxPrice
    )
    .filter(product => 
      selectedManufacturer === '' || product.manufacturer === selectedManufacturer
    )
    .filter(product => 
      selectedWarranty === '' || product.warrantyPeriod === Number(selectedWarranty)
    );

  const manufacturers = [...new Set(products.map(product => product.manufacturer))];
  const warrantyPeriods = [...new Set(products.map(product => product.warrantyPeriod))];

  // Calculate the products to display based on the current page
  const offset = currentPage * itemsPerPage;
  const currentProducts = filteredProducts.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <main>
      <h2>สินค้าของเรา</h2>
      <hr />
      <div className="container-fluid mt-5">
        <div className="row">
          {/* Filter Section */}
          <div className="col-sm-2">
            <div className="filter-section bg-white p-3 rounded shadow-sm">
              <h5>ช่วงราคา</h5>
              <div className="d-flex align-items-center mb-3">
                <input 
                  className="form-control me-2" 
                  placeholder="0" 
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))} 
                />
                <span>-</span>
                <input 
                  className="form-control ms-2" 
                  placeholder="27490" 
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))} 
                />
              </div>
              <input 
                className="form-range" 
                max="27490" 
                min="0" 
                type="range" 
                value={maxPrice} 
                onChange={(e) => setMaxPrice(Number(e.target.value))} 
              />

              {/* Manufacturer Filter */}
              <h5 className="mt-4">ผู้ผลิต</h5>
              <select 
                className="form-select"
                value={selectedManufacturer}
                onChange={(e) => setSelectedManufacturer(e.target.value)}
              >
                <option value="">ทั้งหมด</option>
                {manufacturers.map(manufacturer => (
                  <option key={manufacturer} value={manufacturer}>
                    {manufacturer}
                  </option>
                ))}
              </select>

              {/* Warranty Period Filter */}
              <h5 className="mt-4">ระยะเวลาการรับประกัน (ปี)</h5>
              <select 
                className="form-select"
                value={selectedWarranty}
                onChange={(e) => setSelectedWarranty(e.target.value)}
              >
                <option value="">ทั้งหมด</option>
                {warrantyPeriods.map(warranty => (
                  <option key={warranty} value={warranty}>
                    {warranty}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Product Listing */}
          <div className="col-md-9">
            <div className="row">
              {currentProducts.length > 0 ? (
                currentProducts.map((product) => (
                  <div className="col-sm-3 mb-4" key={product.productId}>
                    <div className="card">
                      <Link to={`/product/${product.productId}`}>
                        <div className="card-image">
                          {product.image && product.image.imageData ? (
                            <img
                              src={`http://localhost:8080/api/image/${product.image.id}`}
                              alt={product.name || 'Product Image'}
                              className="img-fluid"
                            />
                          ) : (
                            <span>No Image</span>
                          )}
                        </div>
                      </Link>
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p><strong>ประเภทสินค้า:</strong> {product.category?.categoryName}</p>
                        <p><strong>ราคา:</strong> ${product.price.toFixed(2)}</p>
                        <AddToCartButton product={product} />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No products found!</p>
              )}
            </div>
            {/* Pagination Controls */}
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductView;
