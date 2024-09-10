import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context";
import AddToCartButton from "../CartPage/AddToCartButton";

const ProductDetail = () => {

    const {products, loading, error} = useContext(ProductContext);
    const { id } = useParams();
    const product = products.find((p) => p.productId === parseInt(id));

    if (!product) {
        return <h2>Product not found!</h2>;
    }
    
    return (
        <div>
            <h1>{product.name}</h1>
            <p><strong>Category:</strong> {product.category.categoryName}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Stock Quantity:</strong> {product.stock_quantity}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <AddToCartButton product={product} />
        </div>
        
    );
};

export default ProductDetail;
