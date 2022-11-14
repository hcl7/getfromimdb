import { createSlice } from "@reduxjs/toolkit";
import { imdbApiBaseUrl } from '../Config/RouterConfig';
import ax from 'axios';

export const imdbSlice = createSlice({
    name: 'imdb',
    initialState: {
        error: null,
        loading: false,
        message: '',
        data: '',
    },
    reducers: {
        setImdbLoading: (state, action) => {
            state.loading = action.payload;
            console.log(state.loading);
        },
        setImdbData: (state, action) => {
            state.data = action.payload;
        },
        setImdbError: (state, action) => {
            state.error = action.payload.error;
        }
    }
});

export const getImdbData = (data) => async (dispatch) =>{
    let loading = true;
    dispatch(setImdbLoading(loading));
    let path = imdbApiBaseUrl + data.squery;
    let config = {
        method: 'get',
        url: path,
        data: ''
    }
    try {
        const res = await ax(config);
        console.log(res.data);
        loading = false;
        dispatch(setImdbLoading(loading));
        dispatch(setImdbData(res.data.results));
    }
    catch (error){
        setImdbError(error);
    }
}

export const {setImdbLoading,setImdbData,setImdbError} = imdbSlice.actions;

export default imdbSlice.reducer;