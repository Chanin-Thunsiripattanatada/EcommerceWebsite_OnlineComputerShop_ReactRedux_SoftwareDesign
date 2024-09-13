import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    id: 0,
    username: '',
    password: '',
    email: '',
    roles: [],
    customerInfo: {}
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInfo(state, action) {
            const { id, username, password, email, roles } = action.payload;
            state.id = id;
            state.username = username;
            state.password = password;
            state.email = email;
            state.roles = roles;
        },
        updateUser(state, action) {
            const { username, email, roles } = action.payload;
            if (username) state.username = username;
            if (email) state.email = email;
            if (roles) state.roles = roles;
        },
        clearUser(state) {
            return initialState;
        },

        setCustomerInfo(state, action) {
            const { customerInfo } = action.payload;
            state.customerInfo = customerInfo;
        }
    },
});

export const fetchUserInfo = (id) => async (dispatch) => {
    try {
      const authToken = sessionStorage.getItem('authToken'); // Get the token from local storage
      const response = await axios.get(`http://localhost:8080/user/customers/${id}`, {
        headers: {
          'Authorization': `Bearer ${authToken}`,
        },
      });
      dispatch(setCustomerInfo(response.data));
    } catch (error) {
      console.error('Failed to fetch Customer info:', error);
    }
};

export const fetchCustomerInfo = (id) => async (dispatch) => {
    try {
      const authToken = sessionStorage.getItem('authToken'); // Get the token from local storage
      const response = await axios.get(`http://localhost:8080/user/customers/${id}`, {
        headers: {
          'Authorization': `Bearer ${authToken}`,
        },
      });
      dispatch(setCustomerInfo(response.data));
    } catch (error) {
      console.error('Failed to fetch Customer info:', error);
    }
};


export const { setUserInfo, updateUser, clearUser, setCustomerInfo } = userSlice.actions;

export default userSlice.reducer;
