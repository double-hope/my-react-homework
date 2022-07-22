import { ActionType } from './common';
import { DataStatus } from '../../common/enums/enums';

const initialState = {
    users: [],
    status: DataStatus.IDLE,
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case ActionType.GET: {
            const { users } = payload;
            return{
                ...state,
                users,
            }
        }

        case ActionType.POST_SIGN_UP: {
            const { user } = payload;
            return{
                ...state,
                users: state.users.concat(user),
            }
        }


        case ActionType.POST_SIGN_IN: {
            const { user } = payload;
            return{
                ...state,
                user,
            }
        }

        default: {
            return state;
        }

    }
}

export { reducer };