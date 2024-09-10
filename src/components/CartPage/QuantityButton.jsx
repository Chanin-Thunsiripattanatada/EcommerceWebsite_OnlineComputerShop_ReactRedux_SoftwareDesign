import React, { useState, useEffect } from 'react';

const QuantityButton = ({ initialQuantity = 1, updateQuantity, canZero = false }) => {
    
    const [quantity, setQuantity] = useState(initialQuantity);
    

    useEffect(() => {
        setQuantity(initialQuantity);
    }, [initialQuantity]);

    const handleDecreaseQuantity = () => {
        let newQ = quantity - 1
        if(!canZero){if(newQ < 1){return;}}
        setQuantity(newQ);
        updateQuantity(newQ);
    };

    const handleIncreaseQuantity = () => {
        let newQ = quantity + 1
        setQuantity(newQ); 
        updateQuantity(newQ);
    };

    return (
    <div className="quantity-selector">
        <button className="quantity-btn" onClick={handleDecreaseQuantity}>-</button>
        <span className="quantity-display">{quantity}</span>
        <button className="quantity-btn" onClick={handleIncreaseQuantity}>+</button>
    </div>
    );
};

export default QuantityButton;
