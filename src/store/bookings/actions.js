import { ActionType } from './common';
import { DataStatus } from '../../common/enums/enums';

const setStatus = (status) =>({
    type: ActionType.SET_STATUS,
    payload: {
        status,
    }
});

const fetchBookings = () => async (dispatch, getStore, { bookingsService }) => {

    dispatch(setStatus(DataStatus.PENDING));

    try{
        const bookings = await bookingsService.getBookings();

        dispatch({
            type: ActionType.SET_BOOKINGS,
            payload:{
                bookings,
            },
        });

        dispatch(setStatus(DataStatus.SUCCESS));
    } catch {
        dispatch(setStatus(DataStatus.ERROR));
    }

}

const addBooking = (payload) => async (dispatch, _getStore, { bookingsService }) => {
    try{
        const booking = await bookingsService.createBooking(payload);

        dispatch({
            type: ActionType.POST,
            payload:{
                booking,
            },
        });
    } catch {
        dispatch(setStatus(DataStatus.ERROR));
    }
};

const deleteBooking = (booking) => async (dispatch, _getStore, { bookingsService }) => {
    try{

        await bookingsService.deleteBooking(booking.id);
        dispatch({
            type: ActionType.DELETE,
            payload:{
                booking,
            },
        });
    } catch {
        dispatch(setStatus(DataStatus.ERROR));
    }
};

export { fetchBookings, addBooking, deleteBooking };