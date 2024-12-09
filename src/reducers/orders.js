import {
    RETRIEVE_ORDERS,
    PLACE_ORDER_FAILURE,
    PLACE_ORDER_SUCCESS,
    PLACE_ORDER_REQUEST,
    UPDATE_ORDER,
} from "../actions/types";

// Initial state
const initialState = [];

// Customer Reducer
function orderReducer(orders = initialState, action) {
    const { type, payload } = action;

    switch (type) {

        case RETRIEVE_ORDERS:
            return payload;

        case PLACE_ORDER_REQUEST:
            return {
                ...orders,
                loading: true,
                error: null,
            };
        case PLACE_ORDER_SUCCESS:
            return {
                ...orders,
                loading: false,
                order: action.payload,
            };
        case PLACE_ORDER_FAILURE:
            return {
                ...orders,
                loading: false,
                error: action.payload,
            };

        case UPDATE_ORDER:
            return orders.map((order) => {
                if (order.orderId === payload.orderId) {
                    return {
                        ...order,
                        ...payload,
                    };
                } else {
                    return order;
                }
            });

        default:
            return orders;
    }
}

export default orderReducer;
