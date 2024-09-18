import {
    CREATE_ORDER,
    RETRIEVE_ORDERS,
    UPDATE_ORDER,
    DELETE_ORDER,

    PLACE_ORDER_FAILURE,
    PLACE_ORDER_SUCCESS,
    PLACE_ORDER_REQUEST,
} from "../actions/types";

// Initial state
const initialState = [];

// Customer Reducer
function orderReducer(orders = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_ORDER:
            return [...orders, payload];

        case RETRIEVE_ORDERS:
            return payload;

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

        case DELETE_ORDER:
            return orders.filter(({ orderId }) => orderId !== payload.id);

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

        default:
            return orders;
    }
}

export default orderReducer;
