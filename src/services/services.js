import { Http } from './http/httpService';
import { Bookings } from './bookings/bookingsService';
import { Trips } from './trips/tripsService';
import { Users } from './users/usersService';

const http = new Http();
const bookings = new Bookings({
    baseURL: 'http://localhost:3001',
    http
});

const trips = new Trips({
    baseURL: 'http://localhost:3001',
    http
});

const users = new Users({
    baseURL: 'http://localhost:3001',
    http
});

export { http, bookings, trips, users };