import {configureStore} from "@reduxjs/toolkit";
import cartReducer from './CartData';
import userReducer from './UserInfo';
import shippingInfoReducer from './ShippingInfo'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        shippingInfo: shippingInfoReducer
    }
})