import React, { useContext, useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import { CartProvider, ProductContext } from "../../context";
import AddToCartButton from "../CartPage/AddToCartButton";

const ProductView = ( {CategoryFilter = 'All'} ) => {

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

//{filteredProducts.map((product) => (