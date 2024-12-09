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

} from "../actions/types";

// Initial orderstatuses
const initialState = {
    orderStatuses: [],
    loading: false,
    error: null,
};

// OrderStatus Reducer
function orderStatusReducer(orderstatuses = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case RETRIEVE_ORDER_STATUS:
            return {
                ...orderstatuses,
                orderStatuses: payload,
                loading: false,
                error: null,
            };

        case RETRIEVE_SINGLE_ORDER_STATUS:
            return {
                ...orderstatuses,
                singleOrderStatus: payload,  // Store the single OrderStatus
                loading: false,
                error: null,
            };

        case RETRIEVE_ORDER_STATUS_FAILURE:
            return {
                ...orderstatuses,
                loading: false,
                error: payload,
            };


        case CREATE_ORDER_STATUS_REQUEST:
        case UPDATE_ORDER_STATUS_REQUEST:
            return {
                ...orderstatuses,
                loading: true,
                error: null,
            };

        case CREATE_ORDER_STATUS_SUCCESS:
            return {
                ...orderstatuses,
                orderStatuses: [...orderstatuses.orderStatuses, payload],  // Add the new order status
                loading: false,
                error: null,
            };

        case UPDATE_ORDER_STATUS_SUCCESS:
            return {
                ...orderstatuses,
                orderStatuses: orderstatuses.orderStatuses.map((status) =>
                    status.id === payload.id ? payload : status
                ),
                loading: false,
                error: null,
            };

        case CREATE_ORDER_STATUS_FAILURE:
        case UPDATE_ORDER_STATUS_FAILURE:
            return {
                ...orderstatuses,
                loading: false,
                error: payload,
            };

        case DELETE_ORDER_STATUS:
            return {
                ...orderstatuses,
                orderStatuses: orderstatuses.orderStatuses.filter((status) => status.id !== payload),
                loading: false,
                error: null,
            };

        default:
            return orderstatuses;
    }
}

export default orderStatusReducer;
