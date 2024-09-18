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
        case CREATE_CUSTOMER:
            return [...customers, payload];

        case RETRIEVE_CUSTOMERS:
            return payload;
        
        case UPDATE_CUSTOMER:
            return customers.map((customer) => {
                if (customer.customerId === payload.customerId) {
                    return {
                        ...customer,
                        ...payload,
                    };
                } else {
                    return customer;
                }
            });

        case FIND_CUSTOMERS_BY_NAME:
            // Assuming payload contains the filtered list of customers by name
            return payload;

        default:
            return customers;
    }
}

export default customerReducer;
