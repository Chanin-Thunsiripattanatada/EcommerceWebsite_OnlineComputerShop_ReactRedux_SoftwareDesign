import {
    RETRIEVE_ORDER_STATUS,
    CREATE_ORDER_STATUS_REQUEST,
    CREATE_ORDER_STATUS_SUCCESS,
    CREATE_ORDER_STATUS_FAILURE,
    UPDATE_ORDER_STATUS_REQUEST,
    UPDATE_ORDER_STATUS_SUCCESS,
    UPDATE_ORDER_STATUS_FAILURE,
    DELETE_ORDER_STATUS,
    RETRIEVE_SINGLE_ORDER_STATUS,
    RETRIEVE_ORDER_STATUS_FAILURE
} from "./types";

import OrderStatusDataService from "../services/orderStatus.service";

export const retrieveOrderStatusByOrderId = (token, orderId) => async (dispatch) => {
    try {
        const res = await OrderStatusDataService.getOrderStatusByOrderId(token, orderId);
        dispatch({
            type: RETRIEVE_SINGLE_ORDER_STATUS,
            payload: res.data,  // A single order status
        });
    } catch (err) {
        console.error('Error retrieving order status:', err);
        dispatch({
            type: RETRIEVE_ORDER_STATUS_FAILURE,
            payload: err.message,
        });
    }
};
// Action for retrieving all order statuses
export const retrieveOrderStatuses = (token) => async (dispatch) => {
    try {
        const res = await OrderStatusDataService.getAllOrderStatuses(token);
        dispatch({
            type: RETRIEVE_ORDER_STATUS,
            payload: res.data,  // Array of order statuses
        });
    } catch (err) {
        console.error('Error retrieving order statuses:', err);
        dispatch({ type: 'FETCH_ORDER_STATUS_ERROR', payload: err.message });
    }
};

// Action for creating a new order status
const createOrderStatusRequest = () => ({
    type: CREATE_ORDER_STATUS_REQUEST,
});

const createOrderStatusSuccess = (orderStatus) => ({
    type: CREATE_ORDER_STATUS_SUCCESS,
    payload: orderStatus,
});

const createOrderStatusFailure = (error) => ({
    type: CREATE_ORDER_STATUS_FAILURE,
    payload: error,
});

export const createOrderStatus = (token, formData) => {
    return async (dispatch) => {
        dispatch(createOrderStatusRequest());
        try {
            const response = await OrderStatusDataService.createOrderStatus(
                token, formData
            );
            dispatch(createOrderStatusSuccess(response.data));
        } catch (error) {
            console.error('Error creating order status:', error);
            dispatch(createOrderStatusFailure(error.message));
        }
    };
};

// Action for updating an existing order status
const updateOrderStatusRequest = () => ({
    type: UPDATE_ORDER_STATUS_REQUEST,
});

const updateOrderStatusSuccess = (orderStatus) => ({
    type: UPDATE_ORDER_STATUS_SUCCESS,
    payload: orderStatus,
});

const updateOrderStatusFailure = (error) => ({
    type: UPDATE_ORDER_STATUS_FAILURE,
    payload: error,
});

export const updateOrderStatus = (token, statusId, orderId, customerId, status, verificationDate, adminNote, imageFile) => {
    return async (dispatch) => {
        dispatch(updateOrderStatusRequest());
        try {
            const response = await OrderStatusDataService.updateOrderStatus(
                token, statusId, orderId, customerId, status, verificationDate, adminNote, imageFile
            );
            dispatch(updateOrderStatusSuccess(response.data));
        } catch (error) {
            console.error('Error updating order status:', error);
            dispatch(updateOrderStatusFailure(error.message));
        }
    };
};

// Action for deleting an order status
export const deleteOrderStatus = (token, statusId) => async (dispatch) => {
    try {
        await OrderStatusDataService.deleteOrderStatus(token, statusId);
        dispatch({
            type: DELETE_ORDER_STATUS,
            payload: statusId,  // ID of the deleted order status
        });
    } catch (err) {
        console.error('Error deleting order status:', err);
        dispatch({ type: 'DELETE_ORDER_STATUS_ERROR', payload: err.message });
    }
};
