import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    name: "",
    address: "",
    city: "",
    zipcode: "",
    country: "",
}

const shippingInfoSlice = createSlice({
    name: 'shippingInfo',
    initialState,
    reducers: {
        updateShippingInfo(state, action){}
    }
});

export const { updateShippingInfo } = shippingInfoSlice.actions;

export default shippingInfoSlice.reducer;