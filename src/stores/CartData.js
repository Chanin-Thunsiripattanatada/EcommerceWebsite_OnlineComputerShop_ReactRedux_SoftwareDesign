import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            const {product, quantity} = action.payload;
            const existingProduct = (state.items).findIndex(item => item.product.product_id === product.product_id);
            if(existingProduct >= 0){
                state.items[existingProduct].quantity += quantity;
            }
            else{
                state.items.push({product, quantity});
            }
        }
    }
});

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;