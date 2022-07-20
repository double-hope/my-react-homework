import {configureStore} from '@reduxjs/toolkit';
import bookingsReducer from './bookingsSlice';

export default configureStore({
    reducer: {
        bookings: bookingsReducer,
    }
});