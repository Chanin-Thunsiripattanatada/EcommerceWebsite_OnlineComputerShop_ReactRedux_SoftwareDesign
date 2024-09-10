import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: 0,
    username: '',
    password: '',
    email: '',
    roles: [],
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
        }
    },
});

export const { setUserInfo, updateUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
