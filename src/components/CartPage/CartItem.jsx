import {React , useEffect, useReducer} from 'react';
import QuantityButton from './QuantityButton';
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantity } from '../../stores/CartData';


const CartItem = (props) => {

    let {product, quantity} = props.data;
    const dispatch = useDispatch();

    const [, forceUpdate] = useReducer(x => x + 1, 0);

    const handleUpdateQuantity = (quantity) => {
        dispatch(changeQuantity({
            product: product,
            quantity: quantity
        }));
        forceUpdate();
    }

    const handleRemoveItem = () => {
        dispatch(changeQuantity({ 
            product: product,
            quantity: 0 
        }));
        forceUpdate();
    };

    return (
        <div>
            <h3>{product.product_name}</h3>
            <QuantityButton initialQuantity={quantity} updateQuantity={handleUpdateQuantity} canZero={true}/>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Total:</strong> ${product.price * quantity}</p>
            <button onClick={handleRemoveItem}>Remove Item</button>
        </div>
    );
};

export default CartItem;
