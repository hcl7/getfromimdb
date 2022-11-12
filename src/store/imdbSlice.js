import { createSlice } from "@reduxjs/toolkit";

export const imdbSlice = createSlice({
    name: 'auth',
    initialState: {
        token: '',
        userId: 0,
        error: null,
        loading: false,
        isAuthenticated: false,
        authRedirectPath: '/login',
        message: '',
        apiKey: '',
    },
    reducers: {
        setSignup: (state, action) => {
            state.message = action.payload.message;
        },
    }
});


export const {setSignup } = imdbSlice.actions;

export default imdbSlice.reducer;