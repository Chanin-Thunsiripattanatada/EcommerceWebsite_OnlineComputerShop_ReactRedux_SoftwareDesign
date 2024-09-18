import {configureStore} from "@reduxjs/toolkit";
import cartReducer from './CartData';
//import userReducer from './UserInfo';
import shippingInfoReducer from './ShippingInfo'

import orderReducer from "../redux/reducers/orders";
import customerReducer from "../redux/reducers/customer";
import userReducer from "../redux/reducers/user";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        //user: userReducer,
        shippingInfo: shippingInfoReducer,
        orders : orderReducer,
        customer : customerReducer,
        user : userReducer,
    }
})