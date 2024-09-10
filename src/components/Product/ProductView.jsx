import React, { useContext, useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import { CartProvider, ProductContext } from "../../context";
import AddToCartButton from "../CartPage/AddToCartButton";

import { useSelector, useDispatch} from "react-redux";
import { fetchData } from '../../stores/actions';

const ProductView = ( {CategoryFilter = 'All'} ) => {

    const products = useContext(ProductContext);

    const data = useSelector((state) => state.data);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData());
        const logData = () => {
            console.log(data);
        };
        logData();
    }, [dispatch]);
    console.log("asdasdasd" + data);
    const filteredProducts = CategoryFilter === 'All'
        ? products 
        : products.filter(product => product.category === CategoryFilter);

    return (
        <>
            <h2>Featured Product</h2>
            <hr />
            <div class="container">
                <div class="row">
                    {data.data.map((product) => (
                        <div class="col-sm-4">
                            <div class="card">
                                <div class="card-body">
                                    <h2>{product.name}</h2>
                                    <p><strong>Category:</strong> {product.category}</p>
                                    <p><strong>Brand:</strong> {product.brand}</p>
                                    <p><strong>Model:</strong> {product.model}</p>
                                    <p><strong>Price:</strong> ${product.price}</p>
                                    <p><strong>Stock Quantity:</strong> {product.stock_quantity}</p>
                                    <p><strong>Description:</strong> {product.description}</p>
                                    <Link to={`/product/${product.product_id}`} class="btn btn-primary">ดูสินค้า</Link>
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