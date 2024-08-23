import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CategoryContext, ProductProvider } from "../../context";
import AddToCartButton from "../CartPage/AddToCartButton";
import ProductView from "../Product/ProductView";

const CategoryView = () => {

    const categories = useContext(CategoryContext);
    const { category } = useParams();
    
    return (
        <div>
            <h1>{category}</h1>
            <ProductProvider><ProductView CategoryFilter={category}/></ProductProvider>
        </div>
        
    );
};

export default CategoryView;