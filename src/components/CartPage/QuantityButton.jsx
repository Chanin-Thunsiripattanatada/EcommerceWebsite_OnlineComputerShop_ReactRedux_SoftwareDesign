import React, { useState, useEffect } from 'react';

const QuantityButton = ({ initialQuantity = 1, updateQuantity, canZero = false }) => {

    const [quantity, setQuantity] = useState(initialQuantity);

    const updateQuantityDisplay = () => {
        
    };

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
        <div>
            <button onClick={handleDecreaseQuantity}>-</button>
            <span> {quantity} </span>
            <button onClick={handleIncreaseQuantity}>+</button>
        </div>
    );
};

export default QuantityButton;
