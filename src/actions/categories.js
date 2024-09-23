import {
    CREATE_CATEGORY,
    RETRIEVE_CATEGORYS,
    UPDATE_CATEGORY,
    DELETE_CATEGORY,
    DELETE_ALL_CATEGORYS,
    FIND_CATEGORYS_BY_NAME,
} from "./types";
  
import CategoryDataService from "../services/categories.service";

  
// Action for creating a customer
export const createCategory = (token,data) => async (dispatch) => {
    try {
        const res = await CategoryDataService.create(token,data);
  
        dispatch({
            type: CREATE_CATEGORY,
            payload: res.data,
        });
  
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};
  
// Action for retrieving all customers
export const retrieveCategorys = (token) => async (dispatch) => {
    try {
        const res = await CategoryDataService.getAll(token);
        dispatch({
            type: RETRIEVE_CATEGORYS,
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
export const updateCategory = (token, id, data) => async (dispatch) => {
    try {
        const res = await CategoryDataService.update(token, id, data);
  
        dispatch({
            type: UPDATE_CATEGORY,
            payload: data,
        });
  
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};
  
// Action for deleting a customer
export const deleteCategory = (token, id) => async (dispatch) => {
    try {
        await CategoryDataService.delete(token, id);
  
        dispatch({
            type: DELETE_CATEGORY,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};
  
// Action for deleting all customers
export const deleteAllCategorys = () => async (dispatch) => {
    try {
        const res = await CategoryDataService.deleteAll();
  
        dispatch({
            type: DELETE_ALL_CATEGORYS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};
  
// Action for finding customers by name
export const findCategorysByName = (name) => async (dispatch) => {
    try {
        const res = await CategoryDataService.findByName(name);
  
        dispatch({
            type: FIND_CATEGORYS_BY_NAME,
            payload: res.data,  // Filtered customers by name
        });
    } catch (err) {
        console.log(err);
    }
};
