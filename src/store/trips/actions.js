import {ActionType} from './common';
import { ENV } from '../../common/enums/enums';

const fetchTrips = () => ({
    type: ActionType.GET,
    payload: {},
    callApi: `${ENV.API.URL}`,
});

export { fetchTrips };