import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductView from "../Product/ProductView";

const CategoryView = () => {
    const { categoryName } = useParams();

    useEffect(() => {
        // This code will run whenever categoryName changes
        console.log(`Category changed to: ${categoryName}`);
        
        // You can add any fetch logic or other side effects here
        // Example:
        // fetchProductsByCategory(categoryName);
        
    }, [categoryName]); // Dependency array: runs effect when categoryName changes

    return (
        <div>
            <h1>{categoryName}</h1>
            <ProductView CategoryFilter={categoryName} />
        </div>
    );
};

export default CategoryView;
