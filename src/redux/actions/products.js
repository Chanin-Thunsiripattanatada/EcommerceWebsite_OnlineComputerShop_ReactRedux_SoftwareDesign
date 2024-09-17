import {
    CREATE_PRODUCT,
    RETRIEVE_PRODUCTS,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    DELETE_ALL_PRODUCTS,
  } from "./types";
  
  import ProductDataService from "../services/products.service";
  
  // Action for creating a product
  export const createProduct = (name, description, price, stockQuantity, category, manufacturer, imageUrl, warrantyPeriod, rating) => async (dispatch) => {
    try {
      const res = await ProductDataService.create({ 
        name, 
        description, 
        price, 
        stockQuantity, 
        category, 
        manufacturer, 
        imageUrl, 
        warrantyPeriod, 
        rating 
      });
  
      dispatch({
        type: CREATE_PRODUCT,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  // Action for retrieving all products
  export const retrieveProducts = () => async (dispatch) => {
    try {
      const res = await ProductDataService.getAll();
  
      dispatch({
        type: RETRIEVE_PRODUCTS,
        payload: res.data,  // Array of products
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
        // dispatch({ type: 'FETCH_PRODUCTS_ERROR', payload: err.message });
      }
  };
  
  // Action for updating a product
  export const updateProduct = (id, data) => async (dispatch) => {
    try {
      const res = await ProductDataService.update(id, data);
  
      dispatch({
        type: UPDATE_PRODUCT,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  // Action for deleting a product
  export const deleteProduct = (id) => async (dispatch) => {
    try {
      await ProductDataService.delete(id);
  
      dispatch({
        type: DELETE_PRODUCT,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  // Action for deleting all products
  export const deleteAllProducts = () => async (dispatch) => {
    try {
      const res = await ProductDataService.deleteAll();
  
      dispatch({
        type: DELETE_ALL_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  // Action for finding products by name
  export const findProductsByName = (name) => async (dispatch) => {
    try {
      const res = await ProductDataService.findByName(name);
  
      dispatch({
        type: RETRIEVE_PRODUCTS,
        payload: res.data,  // Filtered products by name
      });
    } catch (err) {
      console.log(err);
    }
  };
  