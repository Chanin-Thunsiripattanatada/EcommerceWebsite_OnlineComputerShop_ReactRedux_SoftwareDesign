import {
    REGISTER_USER,
    FIND_USER_BY_ID,
    UPDATE_USER,
 } from "../actions/types";
  
const initialState = [];
  
function userReducer(user = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_USER:
        return payload;
        
        case FIND_USER_BY_ID:
        return payload.user;
        
        default:
        return user;
    }
}

export default userReducer;