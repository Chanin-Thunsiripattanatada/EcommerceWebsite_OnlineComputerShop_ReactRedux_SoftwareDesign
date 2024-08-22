import React, { useContext, useState } from 'react';

const QuantityButton = ({ updateQuantity }) => {

    const [quantity, setQuantity] = useState(1);

    const handleDecreaseQuantity = () => {
        let newQ = quantity - 1
        if(newQ < 1){return;}
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
