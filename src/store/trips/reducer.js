import { ActionType } from './common';
import { DataStatus } from '../../common/enums/enums';

const initialState = {
    trips: [],
    status: DataStatus.IDLE,
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case ActionType.GET: {
            const { trips } = payload;
            return{
                ...state,
                trips,
            }
        }
        default: {
            return state;
        }
    }
}

export { reducer };