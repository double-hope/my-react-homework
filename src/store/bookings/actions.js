import { ActionType } from './common';
import data from '../../database.json';

const { bookings } = data;

const fetchBookings = () => ({
    type: ActionType.GET,
    payload: {
        bookings,
    },
});

const addBooking = (booking) => ({
    type: ActionType.POST,
    payload:{
        booking: {
            ...booking,
        },
    },
});

const deleteBooking = (booking) => ({
    type: ActionType.DELETE,
    payload: {
        booking,
    },
});

export { fetchBookings, addBooking, deleteBooking };