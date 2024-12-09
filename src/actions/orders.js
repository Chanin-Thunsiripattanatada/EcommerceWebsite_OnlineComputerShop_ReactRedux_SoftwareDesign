import {
    RETRIEVE_ORDERS,
    PLACE_ORDER_REQUEST,
    PLACE_ORDER_SUCCESS,
    PLACE_ORDER_FAILURE,
    UPDATE_ORDER
} from "./types";
  
import OrderDataService from "../services/orders.service";

// Action for retrieving all orders
export const retrieveOrders = (token, customerId) => async (dispatch) => {
    try {
        const res = await OrderDataService.getByCustomerId(token, customerId);
        dispatch({
            type: RETRIEVE_ORDERS,
            payload: res.data,  // Array of orders
        });
    } catch (err) {
        // Handle errors in more detail
        if (err.response) {
          // Server responded with a status other than 200 range
          console.error('Error response:', err.response.data);
          console.error('Error status:', err.response.status);
          console.error('Error headers:', err.response.headers);
        } else if (err.request) {
          // Request was made but no response received
          console.error('Request error:', err.request);
        } else {
          // Other errors during request setup
          console.error('Error message:', err.message);
        }
    
        // Optionally, you can dispatch an action to set an error in the Redux store
        dispatch({ type: 'FETCH_PRODUCTS_ERROR', payload: err.message });
      }
};



const placeOrderRequest = () => ({
    type: PLACE_ORDER_REQUEST,
});

const placeOrderSuccess = (order) => ({
    type: PLACE_ORDER_SUCCESS,
    payload: order,
});

const placeOrderFailure = (error) => ({
    type: PLACE_ORDER_FAILURE,
    payload: error,
});

export const placeOrder = (token, orderData) => {
    return async (dispatch) => {
        dispatch(placeOrderRequest());
        try {
            const response = await OrderDataService.placeOrder(token, orderData);
            dispatch(placeOrderSuccess(response.data));
            // dispatch({
            //     type: PLACE_ORDER_REQUEST,,
            //     payload: res.data,  // Array of orders
            // });
            return Promise.resolve(response.data);
        } catch (err) {
          return Promise.reject(err);
        }
    };
};

export const updateOrder = (token, id, data) => async (dispatch) => {
    try {
      const res = await OrderDataService.updateOrder(token, id, data);
  
      dispatch({
        type: UPDATE_ORDER,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };


  

