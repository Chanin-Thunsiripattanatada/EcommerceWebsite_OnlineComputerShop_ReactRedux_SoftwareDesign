import {
    RETRIEVE_ORDER_ITEMS,
    ADD_ORDER_ITEM_REQUEST,
    ADD_ORDER_ITEM_SUCCESS,
    ADD_ORDER_ITEM_FAILURE,
    UPDATE_ORDER_ITEM_REQUEST,
    UPDATE_ORDER_ITEM_SUCCESS,
    UPDATE_ORDER_ITEM_FAILURE,
    DELETE_ORDER_ITEM_REQUEST,
    DELETE_ORDER_ITEM_SUCCESS,
    DELETE_ORDER_ITEM_FAILURE,
} from "./types";

import OrderItemsService from "../services/orderItems.service";

// Action for retrieving all order items
// export const retrieveOrderItems = (token) => async (dispatch) => {
//     try {
//         const res = await OrderItemsService.getAll(token);
//         dispatch({
//             type: RETRIEVE_ORDER_ITEMS,
//             payload: res.data,  // Array of order items
//         });
//     } catch (err) {
//         // Handle errors in more detail
//         if (err.response) {
//             console.error('Error response:', err.response.data);
//             console.error('Error status:', err.response.status);
//             console.error('Error headers:', err.response.headers);
//         } else if (err.request) {
//             console.error('Request error:', err.request);
//         } else {
//             console.error('Error message:', err.message);
//         }

//         // Optionally, dispatch an error action
//         dispatch({ type: 'FETCH_ORDER_ITEMS_ERROR', payload: err.message });
//     }
// };
export const retrieveOrderItemByOrderId = (token, id) => async (dispatch) => {
    try {
        const res = await OrderItemsService.getById(token, id); // Assuming this method exists in your service
        dispatch({
            type: RETRIEVE_ORDER_ITEMS, // Use a specific action type for retrieving a single order item
            payload: res.data,  // The order item object
        });
    } catch (err) {
        // Handle errors in more detail
        if (err.response) {
            console.error('Error response:', err.response.data);
            console.error('Error status:', err.response.status);
            console.error('Error headers:', err.response.headers);
        } else if (err.request) {
            console.error('Request error:', err.request);
        } else {
            console.error('Error message:', err.message);
        }

        // Optionally, dispatch an error action
        dispatch({ type: 'FETCH_ORDER_ITEM_ERROR', payload: err.message });
    }
};


const addOrderItemRequest = () => ({
    type: ADD_ORDER_ITEM_REQUEST,
});

const addOrderItemSuccess = (orderItem) => ({
    type: ADD_ORDER_ITEM_SUCCESS,
    payload: orderItem,
});

const addOrderItemFailure = (error) => ({
    type: ADD_ORDER_ITEM_FAILURE,
    payload: error,
});

export const addOrderItem = (token, orderItemData) => {
    return async (dispatch) => {
        dispatch(addOrderItemRequest());
        try {
            const response = await OrderItemsService.create(token, orderItemData);
            dispatch(addOrderItemSuccess(response.data));
        } catch (error) {
            dispatch(addOrderItemFailure(error.message));
        }
    };
};

const updateOrderItemRequest = () => ({
    type: UPDATE_ORDER_ITEM_REQUEST,
});

const updateOrderItemSuccess = (orderItem) => ({
    type: UPDATE_ORDER_ITEM_SUCCESS,
    payload: orderItem,
});

const updateOrderItemFailure = (error) => ({
    type: UPDATE_ORDER_ITEM_FAILURE,
    payload: error,
});

export const updateOrderItem = (token, id, orderItemData) => {
    return async (dispatch) => {
        dispatch(updateOrderItemRequest());
        try {
            const response = await OrderItemsService.update(token, id, orderItemData);
            dispatch(updateOrderItemSuccess(response.data));
        } catch (error) {
            dispatch(updateOrderItemFailure(error.message));
        }
    };
};

const deleteOrderItemRequest = () => ({
    type: DELETE_ORDER_ITEM_REQUEST,
});

const deleteOrderItemSuccess = (id) => ({
    type: DELETE_ORDER_ITEM_SUCCESS,
    payload: id,
});

const deleteOrderItemFailure = (error) => ({
    type: DELETE_ORDER_ITEM_FAILURE,
    payload: error,
});

export const deleteOrderItem = (token, id) => {
    return async (dispatch) => {
        dispatch(deleteOrderItemRequest());
        try {
            await OrderItemsService.delete(token, id);
            dispatch(deleteOrderItemSuccess(id));
        } catch (error) {
            dispatch(deleteOrderItemFailure(error.message));
        }
    };
};
