import {
    CREATE_CATEGORY,
    RETRIEVE_CATEGORYS,
    UPDATE_CATEGORY,
    DELETE_CATEGORY,
    DELETE_ALL_CATEGORYS,
    FIND_CATEGORYS_BY_NAME,
} from "../actions/types";

// Initial state
const initialState = [];

// Customer Reducer
function categoryReducer(categories = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_CATEGORY:
            return [...categories, payload];

        case RETRIEVE_CATEGORYS:
            return payload;

        case UPDATE_CATEGORY:
            return categories.map((category) => {
                if (category.categoryId === payload.categoryId) {
                    return {
                        ...category,
                        ...payload,
                    };
                } else {
                    return category;
                }
            });

        case DELETE_CATEGORY:
            return categories.filter(({ categoryId }) => categoryId !== payload.id);

        case DELETE_ALL_CATEGORYS:
            return [];

        case FIND_CATEGORYS_BY_NAME:
            // Assuming payload contains the filtered list of categories by name
            return payload;

        default:
            return categories;
    }
}

export default categoryReducer;
