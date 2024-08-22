import React, { useContext } from "react";
import { Link, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import { CartProvider, ProductContext } from "../../context";
import AddToCartButton from "../CartPage/AddToCartButton";

const Content3 = () => {

    const products = useContext(ProductContext);

    return (
        <>
            <h2>Featured Product</h2>
            <hr />
            <div class="container">
                <div class="row">
                    {products.map((product) => (
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