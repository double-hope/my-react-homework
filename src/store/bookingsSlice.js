import {createSlice} from '@reduxjs/toolkit';

const bookingsSlice = createSlice({
    name: 'bookings',
    initialState:{
        bookings: []
    },
    reducers:{
        addBooking(state, action){
            state.bookings.push(action.payload);
        },
        removeBooking(state, action) {
            state.bookings = state.bookings.filter(book => book.id !== action.payload.id);
        },
        sortBookings(state, action){
            state.bookings = state.bookings.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
        }
    }
});

export const {addBooking, removeBooking, sortBookings} = bookingsSlice.actions;

export default bookingsSlice.reducer;