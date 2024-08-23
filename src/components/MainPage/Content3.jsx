import React, { useContext, useState } from "react";
import { Link, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import { CartProvider, CategoryProvider, ProductContext } from "../../context";
import AddToCartButton from "../CartPage/AddToCartButton";
import CategoryBar from "../Category/CategoryBar";

const Content3 = () => {
    const products = useContext(ProductContext);
    
    const [categoryFilter, setCategoryFilter] = useState('All');
    console.log(categoryFilter)

    const filteredProducts = categoryFilter === 'All'
        ? products 
        : products.filter(product => product.category === categoryFilter);

    const handleCategoryChange = (category) => {
        setCategoryFilter(category);
        console.log(categoryFilter)
    }

    return (
        <>
            <h2>Featured Product</h2>
            <hr />
            <CategoryProvider><CategoryBar onSelectCategory={handleCategoryChange}/></CategoryProvider>
            <div class="container">
                <div class="row">
                    {filteredProducts.map((product) => (
                        <div class="col-sm-4">
                            <div class="card">
                                <div class="card-body">
                                    <h2>{product.product_name}</h2>
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

export default Content3;