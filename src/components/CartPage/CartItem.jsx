import React from 'react';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
    const handleRemove = () => {
        onRemove(item.id);
    };

    const handleQuantityChange = (event) => {
        onUpdateQuantity(item.id, parseInt(event.target.value, 10));
    };

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
                <h4>{item.id}</h4>
                <p>Price: ${item.price}</p>
                <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={handleQuantityChange}
                />
                <button onClick={handleRemove}>Remove</button>
            </div>
        </div>
    );
};

export default CartItem;
