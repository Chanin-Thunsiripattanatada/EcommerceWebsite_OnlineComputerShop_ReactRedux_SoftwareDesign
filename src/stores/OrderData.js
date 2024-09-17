import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    orderList: [
    {
        orderId: "",
        customerId: 0,
        orderDate: "",
        totalAmount: "",
        shippingStatus: "",
        orderItems: [],
    }
]
    
}

const orderDataSlice = createSlice({
    name: 'orderData',
    initialState,
    reducers: {
        setOrderRecords(state, action){
            const { order } = action.payload
            order.
            state.orderList.push(order)
        }
    }
});

export const {  } = orderDataSlice.actions;

export default orderDataSlice.reducer;