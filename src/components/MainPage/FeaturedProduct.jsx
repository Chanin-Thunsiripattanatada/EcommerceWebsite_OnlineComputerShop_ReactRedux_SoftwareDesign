import React, { useContext, useState } from "react";
import { Link, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProductDetail from "../Product/ProductDetail";
import { CartProvider, CategoryProvider, ProductContext, ProductProvider } from "../../context";
import AddToCartButton from "../CartPage/AddToCartButton";
import CategoryBar from "../Category/CategoryBar";
import ProductView from "../Product/ProductView";

const FeaturedProduct = () => {
    
    const [categoryFilter, setCategoryFilter] = useState('All');

    const handleCategoryChange = (category) => {
        setCategoryFilter(category);
    }

    return (
        <>
            <CategoryBar onSelectCategory={handleCategoryChange}/>
            <ProductView CategoryFilter={categoryFilter}/>
        </>
    )
};

export default FeaturedProduct;