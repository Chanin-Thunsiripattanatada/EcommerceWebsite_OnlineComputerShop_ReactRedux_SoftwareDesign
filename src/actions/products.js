import {
    CREATE_PRODUCT,
    RETRIEVE_PRODUCTS,
    GET_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    DELETE_ALL_PRODUCTS,
  } from "./types";
  
  import ProductDataService from "../services/products.service";
  // Action for creating a product
  export const createProduct = (token, data) => async (dispatch) => {
    try {
      const res = await ProductDataService.create(token,data);
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
      return Promise.reject(err);
    }
  };
  // Action for get product by id
  export const getProduct = () => async (dispatch,id) => {
    try {
      const res = await ProductDataService.get(id);
  
      dispatch({
        type: GET_PRODUCT,
        payload: res.data,  // Array of products
      });
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  // Action for updating a product
  export const updateProduct = (token, id, data) => async (dispatch) => {
    try {
      const res = await ProductDataService.update(token, id, data);
  
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
  export const deleteProduct = (token, id) => async (dispatch) => {
    try {
      await ProductDataService.delete(token, id);
  
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
  