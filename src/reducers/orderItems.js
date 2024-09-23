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
} from "../actions/types";

// Initial orderItems
const initialState = {
    items: [],
    loading: false,
    error: null,
};

// Order Items Reducer
function orderItemsReducer(orderItems = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case RETRIEVE_ORDER_ITEMS:
            return {
                ...orderItems,
                items: payload,
                loading: false,
                error: null,
            };

        case ADD_ORDER_ITEM_REQUEST:
            return {
                ...orderItems,
                loading: true,
                error: null,
            };
        case ADD_ORDER_ITEM_SUCCESS:
            return {
                ...orderItems,
                loading: false,
                items: [...orderItems.items, payload], // Add new order item
            };
        case ADD_ORDER_ITEM_FAILURE:
            return {
                ...orderItems,
                loading: false,
                error: payload,
            };

        case UPDATE_ORDER_ITEM_REQUEST:
            return {
                ...orderItems,
                loading: true,
                error: null,
            };
        case UPDATE_ORDER_ITEM_SUCCESS:
            return {
                ...orderItems,
                loading: false,
                items: orderItems.items.map((item) => 
                    item.id === payload.id ? payload : item // Update existing order item
                ),
            };
        case UPDATE_ORDER_ITEM_FAILURE:
            return {
                ...orderItems,
                loading: false,
                error: payload,
            };

        case DELETE_ORDER_ITEM_REQUEST:
            return {
                ...orderItems,
                loading: true,
                error: null,
            };
        case DELETE_ORDER_ITEM_SUCCESS:
            return {
                ...orderItems,
                loading: false,
                items: orderItems.items.filter((item) => item.id !== payload), // Remove deleted order item
            };
        case DELETE_ORDER_ITEM_FAILURE:
            return {
                ...orderItems,
                loading: false,
                error: payload,
            };

        default:
            return orderItems;
    }
}

export default orderItemsReducer;
