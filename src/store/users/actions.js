import { ActionType } from './common';
import { DataStatus } from '../../common/enums/app/dataStatusEnum';

const setStatus = (status) => ({
    type: ActionType.SET_STATUS,
    payload: {
        status,
    }
});

const getUsers = (payload) => async (dispatch, _getStore, { usersService }) => {
    try{
        const users = await usersService.getUsers(payload);

        dispatch({
            type: ActionType.GET,
            payload:{
                users,
            },
        });
    } catch {
        dispatch(setStatus(DataStatus.ERROR));
    }
};

const addUser = (payload) => async (dispatch, _getStore, { usersService }) => {
    try{
        const user = await usersService.createUser(payload);

        dispatch({
            type: ActionType.POST_SIGN_UP,
            payload:{
                user,
            },
        });
    } catch {
        dispatch(setStatus(DataStatus.ERROR));
    }
};

// const getUserTrips = (payload) => async (dispatch, _getStore, { usersService }) => {
//     try{
//         const user = await usersService.getUser(payload);
//
//         dispatch({
//             type: ActionType.POST_SIGN_IN,
//             payload:{
//                 user,
//             },
//         });
//     } catch {
//         dispatch(setStatus(DataStatus.ERROR));
//     }
// };

export { getUsers, addUser };