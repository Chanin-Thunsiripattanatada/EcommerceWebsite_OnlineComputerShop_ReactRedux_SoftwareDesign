import React, { useContext } from 'react';
import { CartContext } from '../../context';

const AddToCartButton = ({ product }) => {
    
    const { addCartItem } = useContext(CartContext);

    const handleAddToCart = () => {
        addCartItem(product);
    };

    return (
        <button onClick={handleAddToCart}>Add to Cart</button>
    );
};

export default AddToCartButton;
