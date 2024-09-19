import {configureStore} from "@reduxjs/toolkit";
import cartReducer from './CartData';

import orderReducer from "../redux/reducers/orders";
import customerReducer from "../redux/reducers/customer";
import userReducer from "../redux/reducers/user";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        customer : customerReducer,
        user : userReducer,
        orders : orderReducer
    }
})