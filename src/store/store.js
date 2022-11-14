import { configureStore } from "@reduxjs/toolkit";
import imdbReducer from './imdbSlice';

export default configureStore({
    reducer:{
        imdb: imdbReducer,
    }
});