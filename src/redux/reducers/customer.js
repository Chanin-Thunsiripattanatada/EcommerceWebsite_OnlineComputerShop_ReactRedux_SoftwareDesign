import {
    CREATE_CUSTOMER,
    RETRIEVE_CUSTOMERS,
    UPDATE_CUSTOMER,
    DELETE_CUSTOMER,
    DELETE_ALL_CUSTOMERS,
    FIND_CUSTOMERS_BY_NAME,
} from "../actions/types";

// Initial state
const initialState = [];

// Customer Reducer
function customerReducer(customers = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case RETRIEVE_CUSTOMERS:
            return payload;
        
        case UPDATE_CUSTOMER:
            return payload

        case FIND_CUSTOMERS_BY_NAME:
            return payload;

        default:
            return customers;
    }
}

export default customerReducer;
