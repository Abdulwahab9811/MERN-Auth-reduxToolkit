import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlices';
import { apiSlice } from './slices/apiSlice';
//import cartSliceReducer from './slices/'

const store = configureStore({
    reducer: {
        auth : authReducer,
        cart: cartSliceReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true

});

export default store;