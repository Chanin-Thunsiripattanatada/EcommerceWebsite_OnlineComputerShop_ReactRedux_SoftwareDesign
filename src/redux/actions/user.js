import {
    REGISTER_USER,
    FIND_USER_BY_ID,
    UPDATE_CUSTOMER,
} from "./types"

import UserDataService from "../services/user.service"

export const registerUser = (data) => async (dispatch) => {
    try{
        const res = await UserDataService.register(data);

        dispatch({
            type: REGISTER_USER,
            payload: res.data
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const getUserById = (token, id) => async (dispatch) => {
    try{
        const res = await UserDataService.get(token, id);

        dispatch({
            type: FIND_USER_BY_ID,
            payload: res.data
        });

    } catch (err) {
        // Handle errors in more detail
        if (err.response) {
            // Server responded with a status other than 200 range
            console.error('Error response:', err.response.data);
            console.error('Error status:', err.response.status);
            console.error('Error headers:', err.response.headers);
          } else if (err.request) {
            // Request was made but no response received
            console.error('Request error:', err.request);
          } else {
            // Other errors during request setup
            console.error('Error message:', err.message);
          }
    }
}