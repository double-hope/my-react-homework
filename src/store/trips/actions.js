import { ActionType } from './common';
import { DataStatus } from "../../common/enums/enums";

const setStatus = (status) =>({
    type: ActionType.SET_STATUS,
    payload: {
        status,
    }
});


const fetchTrips = () => async (dispatch, getStore, { tripsService }) => {

    dispatch(setStatus(DataStatus.PENDING));

    try{
        const trips = await tripsService.getTrips();

        dispatch({
            type: ActionType.SET_TRIPS,
            payload:{
                trips,
            },
        });

        dispatch(setStatus(DataStatus.SUCCESS));
    } catch {
        dispatch(setStatus(DataStatus.ERROR));
    }

}

export { fetchTrips };