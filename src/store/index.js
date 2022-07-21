import {combineReducers, createStore} from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { bookings } from './rootReducer';

const store = createStore(
    combineReducers({
        bookings,
    }),
    composeWithDevTools(),
);

export { store };