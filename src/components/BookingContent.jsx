import React from 'react';
import '../styles/style.css';
import BookingElement from './BookingElement';
import {useDispatch} from 'react-redux';
import {sortBookings} from '../store/bookingsSlice';

const BookingContent = ({bookings}) => {

    const dispatch = useDispatch();

    if(!bookings.length){
        return(
            <main className='bookings-page'>
                <h1 className='visually-hidden'>Travel App</h1>
                <h1 style={{textAlign: 'center'}}> No bookings yet </h1>
            </main>
        )
    }
    else {
        dispatch(sortBookings());
    }

    return (
        <main className='bookings-page'>
            <h1 className='visually-hidden'>Travel App</h1>
            <ul className='bookings__list'>
                    {bookings.length
                        ? bookings.map(booking =>
                            <BookingElement key={booking.id} booking={booking} bookings={bookings}/>)
                        : <BookingElement key={bookings.id} booking={bookings} bookings={bookings}/>
                    }
            </ul>
        </main>
    );
};

export default BookingContent;