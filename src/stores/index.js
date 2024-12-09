import {configureStore} from "@reduxjs/toolkit";
import cartReducer from './CartData';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        // user: userReducer,
        // shippingInfo: shippingInfoReducer,
        order: orderDataReducer,
        // orders : orderReducer,
    }
})