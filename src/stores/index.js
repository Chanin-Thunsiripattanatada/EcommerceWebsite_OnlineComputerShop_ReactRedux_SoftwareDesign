import {configureStore} from "@reduxjs/toolkit";
import cartReducer from './CartData';
import userReducer from './UserInfo';
import shippingInfoReducer from './ShippingInfo'
import orderDataReducer from './OrderData'

import orderReducer from "../redux/reducers/orders";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        shippingInfo: shippingInfoReducer,
        order: orderDataReducer,
        orders : orderReducer,
    }
})