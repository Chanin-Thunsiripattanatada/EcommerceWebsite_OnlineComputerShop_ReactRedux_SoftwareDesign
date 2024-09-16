import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    items: window.localStorage.getItem("CART_ITEMS") ? JSON.parse(window.localStorage.getItem("CART_ITEMS")) : [],
    totalAmount: window.localStorage.getItem("CART_TOTAL_AMOUNT") ? JSON.parse(window.localStorage.getItem("CART_TOTAL_AMOUNT")) : 0,
    totalPrice: window.localStorage.getItem("CART_TOTAL_PRICE") ? JSON.parse(window.localStorage.getItem("CART_TOTAL_PRICE")) : 0,
    
    cartTabVisibility: false
}

const calculateTotals = (items) => {
    const totalAmount = items.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = items.reduce((acc, item) => acc + item.quantity * item.product.price, 0);
    return { totalAmount, totalPrice };
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            const {product, quantity} = action.payload;
            const existingProduct = (state.items).findIndex(item => item.product.productId === product.productId);
            if(existingProduct >= 0){
                state.items[existingProduct].quantity += quantity;
            }
            else{
                state.items.push({product, quantity});
            }

            const totals = calculateTotals(state.items);
            state.totalAmount = totals.totalAmount;
            state.totalPrice = totals.totalPrice;

            window.localStorage.setItem("CART_ITEMS", JSON.stringify(state.items));
            window.localStorage.setItem("CART_TOTAL_AMOUNT", JSON.stringify(state.totalAmount));
            window.localStorage.setItem("CART_TOTAL_PRICE", JSON.stringify(state.totalPrice));
        },

        changeQuantity(state, action){
            const {product, quantity} = action.payload;
            const existingProduct = (state.items).findIndex(item => item.product.productId === product.productId);
            if(quantity > 0){
                state.items[existingProduct].quantity = quantity;
            }
            else{
                state.items = (state.items).filter(item => item.product.productId !== product.productId)
            }

            const totals = calculateTotals(state.items);
            state.totalAmount = totals.totalAmount;
            state.totalPrice = totals.totalPrice;

            window.localStorage.setItem("CART_ITEMS", JSON.stringify(state.items));
            window.localStorage.setItem("CART_TOTAL_AMOUNT", JSON.stringify(state.totalAmount));
            window.localStorage.setItem("CART_TOTAL_PRICE", JSON.stringify(state.totalPrice));
        },
        
        clearCart(state){
            state.items = []
            state.totalAmount = 0;
            state.totalPrice = 0;

            window.localStorage.setItem("CART_ITEMS", JSON.stringify(state.items));
            window.localStorage.setItem("CART_TOTAL_AMOUNT", JSON.stringify(state.totalAmount));
            window.localStorage.setItem("CART_TOTAL_PRICE", JSON.stringify(state.totalPrice));
        },

        toggleCartTabVisibility(state){
            if(state.cartTabVisibility === false){
                state.cartTabVisibility = true;
            }else{state.cartTabVisibility = false;}
        },

        openCartTab(state){
            if(state.cartTabVisibility === false){
                state.cartTabVisibility = true;
            }
        },

        closeCartTab(state){
            if(state.cartTabVisibility === true){
                state.cartTabVisibility = false;
            }
        }
    }
});

export const {addToCart, changeQuantity, clearCart, toggleCartTabVisibility, openCartTab, closeCartTab} = cartSlice.actions;

export default cartSlice.reducer;