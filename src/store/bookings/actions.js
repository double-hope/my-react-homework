import { ActionType } from './common';
import { ApiPath } from '../../common/enums/enums';

const fetchBookings = () => ({
    type: ActionType.FETCH_BOOKINGS,
    payload: {},
    callApi: `http://localhost:3001${ApiPath.BOOKINGS}`,
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