import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    items: window.localStorage.getItem("CART_ITEMS") ? JSON.parse(window.localStorage.getItem("CART_ITEMS")) : []
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
            window.localStorage.setItem("CART_ITEMS", JSON.stringify(state.items));
        },

        changeQuantity(state, action){
            const {product, quantity} = action.payload;
            const existingProduct = (state.items).findIndex(item => item.product.product_id === product.product_id);
            if(quantity > 0){
                state.items[existingProduct].quantity = quantity;
            }
            else{
                state.items = (state.items).filter(item => item.product.product_id !== product.product_id)
            }
            window.localStorage.setItem("CART_ITEMS", JSON.stringify(state.items));
        }
    }
});

export const {addToCart, changeQuantity} = cartSlice.actions;

export default cartSlice.reducer;