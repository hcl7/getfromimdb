import { configureStore } from "@reduxjs/toolkit";
import authReducer from './imdbSlice';

export default configureStore({
    reducer:{
        auth: authReducer,
    }
});