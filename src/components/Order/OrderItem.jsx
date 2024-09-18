import React from 'react';

const OrderItem = ({ item }) => {
    const { product, quantity, price } = item;

    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>${price.toFixed(2)}</td>
            <td>{quantity}</td>
            <td>${(price * quantity).toFixed(2)}</td>
        </tr>
    );
};

export default OrderItem;
