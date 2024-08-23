import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context";
import AddToCartButton from "../CartPage/AddToCartButton";

const ProductDetail = () => {

    const products = useContext(ProductContext);
    const { id } = useParams();
    const product = products.find((p) => p.product_id === parseInt(id));

    if (!product) {
        return <h2>Product not found!</h2>;
    }
    
    return (
        <div>
            <h1>{product.product_name}</h1>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Model:</strong> {product.model}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Stock Quantity:</strong> {product.stock_quantity}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <AddToCartButton product={product} />
        </div>
        
    );
};

export default ProductDetail;
