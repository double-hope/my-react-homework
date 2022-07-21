import {ActionType} from "./actionType";

export { ActionType } from './actionType';
import { ENV } from '../../common/enums/enums';

const fetchTrips = () => ({
    type: ActionType.FETCH_TRIPS,
    payload: {},
    callApi: `${ENV.API.URL}`,
});

export { fetchTrips };