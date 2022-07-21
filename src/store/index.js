import { combineReducers, createStore, applyMiddleware } from '@reduxjs/toolkit';
import { bookings } from './rootReducer';
import { callApi } from './middlewares/callApi/callApi';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
    combineReducers({
        bookings,
    }),
    composeWithDevTools(applyMiddleware(callApi))
    ,
);

export { store };