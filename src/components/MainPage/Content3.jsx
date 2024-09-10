import React, { useContext, useState } from "react";
import { Link, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import { CartProvider, CategoryProvider, ProductContext, ProductProvider } from "../../context";
import AddToCartButton from "../CartPage/AddToCartButton";
import CategoryBar from "../Category/CategoryBar";
import ProductView from "../Product/ProductView";

const Content3 = () => {
    const {products, loading, error} = useContext(ProductContext);
    
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
            <CategoryProvider><CategoryBar onSelectCategory={handleCategoryChange}/></CategoryProvider>
            <ProductProvider><ProductView CategoryFilter={categoryFilter}/></ProductProvider>
        </>
    )
};

export default Content3;