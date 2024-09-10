// store.js
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './reducer';

const store = configureStore({
    reducer: {
        data: dataReducer, // You can add more reducers here as your app scales
    },
    devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});

export default store;
