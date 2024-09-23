import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddToCartButton from "../CartPage/AddToCartButton";
import { useDispatch, useSelector } from "react-redux";
import { retrieveProducts } from "../../actions/products";

const ProductDetail = () => {
    const products = useSelector((state) => state.products);
    const { id } = useParams(); // Get the product ID from URL
    const [product, setProduct] = useState(null); // Initialize product state as null

     // Run effect when `id` or `products` changes
    useEffect(() => {
        const foundProduct = products.find((product) => product.productId === parseInt(id));
        setProduct(foundProduct);
    },[id])
    if (!product) {
        return <h2>Product not found!</h2>;
    }
    

    return (
        <>
            <main>
                <div className="container card mt-5">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="text-center">
                                    {product.image && product.image.imageData ? (
                                        <img
                                            src={`http://localhost:8080/api/image/${product.image.id}`}
                                            alt={product.name || 'Product Image'}
                                            width={300}
                                            height={300}
                                            className="img-fluid"
                                        />
                                    ) : (
                                        <span>No Image</span>
                                    )}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="product-info">
                                    {product.stockQuantity > 0 && <span className="badge bg-success">มีสินค้า</span>}
                                    <h2>{product.name}</h2>
                                    <p>แบรนด์: {product.manufacturer}<br />
                                        ประเภท: {product.category.categoryName}<br />
                                        ฿{product.price.toFixed(2)}<br/>
                                        เวลารับประกัน: {product.warrantyPeriod} เดือน

                                        </p>
                                    <AddToCartButton product={product} />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <h4>รายละเอียดสินค้า</h4>
                        <div className="row p-4">
                            
                            <div
                                dangerouslySetInnerHTML={{ __html: product.description }}
                            />

                        </div>
                    </div>
                </div>
            </main>
        </>

    );
};

export default ProductDetail;
