import React, { useContext, useState } from 'react';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../stores/CartData';
import QuantityButton from './QuantityButton';

const AddToCartButton = ({ product }) => {
    
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);
    
    const handleAddToCart = () => {
        dispatch(addToCart({
            product: product,
            quantity : quantity
        }))
    };

    const handleUpdateQuantity = (quantity) => {
        setQuantity(quantity);
    }

    return (
        <div>
            <QuantityButton updateQuantity = {handleUpdateQuantity} />
            <button className="btn btn-primary" onClick={handleAddToCart}>เพิ่มใส่ตระกร้า</button>
        </div>
    );
};

export default AddToCartButton;
