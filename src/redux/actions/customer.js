import {
    CREATE_CUSTOMER,
    RETRIEVE_CUSTOMERS,
    UPDATE_CUSTOMER,
    DELETE_CUSTOMER,
    DELETE_ALL_CUSTOMERS,
    FIND_CUSTOMERS_BY_NAME,
} from "./types";
  
import CustomerDataService from "../services/customer.service";

  
// Action for creating a customer
export const createCustomer = (token,data) => async (dispatch) => {
    try {
        const res = await CustomerDataService.create(token,data);
  
        dispatch({
            type: CREATE_CUSTOMER,
            payload: res.data,
        });
        
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};
  
// Action for retrieving all customers
export const getCustomerById = (token, customerId) => async (dispatch) => {
    try {
        const res = await CustomerDataService.get(token, customerId);
        dispatch({
            type: RETRIEVE_CUSTOMERS,
            payload: res.data,  // Array of customers
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
  
// Action for updating a customer
export const updateCustomer = (token, id, data) => async (dispatch) => {
    try {
        const res = await CustomerDataService.update(token, id, data);
  
        dispatch({
            type: UPDATE_CUSTOMER,
            payload: data,
        });
  
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};
  
// Action for finding customers by name
export const findCustomersByName = (name) => async (dispatch) => {
    try {
        const res = await CustomerDataService.findByName(name);
  
        dispatch({
            type: FIND_CUSTOMERS_BY_NAME,
            payload: res.data,  // Filtered customers by name
        });
    } catch (err) {
        console.log(err);
    }
};
