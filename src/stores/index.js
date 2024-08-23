import {configureStore} from "@reduxjs/toolkit";
import cartReducer from './CartData';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})