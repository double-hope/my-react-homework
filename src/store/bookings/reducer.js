import { ActionType } from './common';
import {DataLoadStatus, DataStatus} from "../../common/enums/enums";

const initialState = {
    bookings: [],
    bookingsStatus: DataStatus.IDLE,
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case ActionType.GET: {
            const { bookings } = payload;
            return{
                ...state,
                bookings,
            };
        }

        case `${ActionType.FETCH_BOOKINGS}${DataLoadStatus.START}`:{
            return {
                ...state,
                bookingsStatus: DataStatus.PENDING,
            };
        }

        case `${ActionType.FETCH_BOOKINGS}${DataLoadStatus.SUCCESS}`:{
            const {response: bookings} = payload;
            return {
                ...state,
                bookingsStatus: DataStatus.SUCCESS,
                bookings,
            };
        }

        case ActionType.POST: {
            const { booking } = payload;
            return{
                ...state,
                bookings: state.bookings.concat(booking),
            };
        }

        case ActionType.DELETE: {

            const { booking } = payload;

            return{
                ...state,
                bookings: state.bookings.filter((it) => it.id !== booking.id),
            };
        }

        default: {
            return state;
        }
    }
}

export { reducer };