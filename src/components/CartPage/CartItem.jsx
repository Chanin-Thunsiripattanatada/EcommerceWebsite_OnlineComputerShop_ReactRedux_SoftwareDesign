import { React, useEffect, useReducer } from 'react';
import QuantityButton from './QuantityButton';
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantity } from '../../stores/CartData';
import { Button } from 'react-bootstrap';


const CartItem = (props) => {

    let { product, quantity } = props.data;
    const dispatch = useDispatch();

    const handleUpdateQuantity = (quantity) => {
        dispatch(changeQuantity({
            product: product,
            quantity: quantity
        }));
    }

    const handleRemoveItem = () => {
        dispatch(changeQuantity({
            product: product,
            quantity: 0
        }));
    };

    return (

        <tr>
            <th>{product.image && product.image.imageData ? (
                                        <img
                                            src={`http://localhost:8080/api/image/${product.image.id}`}
                                            alt={product.name || 'Product Image'}
                                            width={50}
                                            height={50}
                                            className="img-fluid"
                                        />
                                    ) : (
                                        <span>No Image</span>
                                    )}</th>
            <th><h5>{product.name}</h5></th>
            <th>฿{product.price}</th>
            <th>฿{product.price * quantity}</th>
            <th><QuantityButton initialQuantity={quantity} updateQuantity={handleUpdateQuantity} canZero={true} /></th>
            <th><Button variant="danger" onClick={handleRemoveItem}>ลบออกจากตระกร้า</Button></th>
        </tr>
        

    );
};

export default CartItem;
