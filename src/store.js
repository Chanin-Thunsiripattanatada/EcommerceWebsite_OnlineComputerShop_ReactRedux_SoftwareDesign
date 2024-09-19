// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducers/';  // Assuming you have a rootReducer combining your reducers

const store = configureStore({
  reducer: rootReducer,
  // You can add preloadedState or middleware here if needed, but thunk is included by default
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in non-production environments
});

export default store;
