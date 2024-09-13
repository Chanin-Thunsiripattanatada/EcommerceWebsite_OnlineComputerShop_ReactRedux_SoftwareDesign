import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import { CartProvider, ProductContext } from "../../context";
import AddToCartButton from "../CartPage/AddToCartButton";

const ProductView = ({ CategoryFilter = 'All' , searchFilter = ""}) => {
  const { products, loading, error } = useContext(ProductContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const {searchTerm} = searchFilter.toLowerCase();

  //filter search and catogry
  const filteredProducts = products
    .filter(product => CategoryFilter === 'All' || product.category.categoryName === CategoryFilter)
    /*.filter(product => 
        searchTerm === "" || // Don't filter by search if searchTerm is empty
        product.name.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.categoryName.toLowerCase().includes(searchTerm) // Add more fields as needed
      );*/

  return (
    <>
      <h2>Featured Product</h2>
      <hr />
      <div className="container">
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-sm-4" key={product.productId}>
              <div className="card">
                <div className="card-body">
                  <h2>{product.name}</h2>
                  <p><strong>Category:</strong> {product.category.categoryName}</p>
                  <p><strong>Price:</strong> ${product.price}</p>
                  <p><strong>Stock Quantity:</strong> {product.stockQuantity}</p>
                  <p><strong>Description:</strong> {product.description}</p>
                  <Link to={`/product/${product.productId}`} className="btn btn-primary">View Product</Link>
                  <AddToCartButton product={product} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductView;




/*import React, { useContext, useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import { CartProvider, ProductContext } from "../../context";
import AddToCartButton from "../CartPage/AddToCartButton";

const ProductView = ( {CategoryFilter = 'All', searchFilter} ) => {

    const {products, loading, error} = useContext(ProductContext);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    
    const filteredProducts = CategoryFilter === 'All'
        ? products
        : products.filter(product => product.category.categoryName === CategoryFilter);

    return (
        <>
            <h2>Featured Product</h2>
            <hr />
            <div class="container">
                <div class="row">
                    {filteredProducts.map((product) => (
                        <div class="col-sm-4">
                            <div class="card">
                                <div class="card-body">
                                    <h2>{product.name}</h2>
                                    <p><strong>Category:</strong> {product.category.categoryName}</p>
                                    <p><strong>Price:</strong> ${product.price}</p>
                                    <p><strong>Stock Quantity:</strong> {product.stockQuantity}</p>
                                    <p><strong>Description:</strong> {product.description}</p>
                                    <Link to={`/product/${product.productId}`} class="btn btn-primary">ดูสินค้า</Link>
                                    <AddToCartButton product={product} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default ProductView;

//{filteredProducts.map((product) => (*/