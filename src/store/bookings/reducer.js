import { ActionType } from './common';

const initialState = {
    bookings: [],
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