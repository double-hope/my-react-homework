import { combineReducers, createStore, applyMiddleware } from '@reduxjs/toolkit';
import { bookings, trips, users } from './rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import { bookings as bookingsService } from '../services/services';
import { trips as tripsService } from '../services/services';
import { users as usersService } from '../services/services';
import { thunk as thunkMiddleware} from './middlewares/middlewares';

const store = createStore(
    combineReducers({
        bookings,
        trips,
        users,
    }),
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware.withExtraArgument({
                bookingsService,
                tripsService,
                usersService,
            })
        )
    )
);

export { store };