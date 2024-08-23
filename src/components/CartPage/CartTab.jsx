import {React, useEffect} from 'react';
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartTab = () => {

    const cartItems = useSelector(store => store.cart.items);

    return (
        <div className="fixed top-0 right-0">
            <h2> Cart </h2>
            <div>
                {cartItems.map((item, key) =>
                    <CartItem key={key} data={item}  />
                )}
            </div>
            <div className="grid grid-cols-2">
                <button class="btn btn-primary"> Close </button>
                <button class="btn btn-primary"> Checkout </button>
            </div>
        </div>
    )
}

export default CartTab;