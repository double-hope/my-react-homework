import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeBooking} from '../store/bookingsSlice';

const BookingElement = ({booking}) => {

    const bookings = useSelector(state => state.bookings.bookings);
    const dispatch = useDispatch();

    if(!bookings.length){
        return(
            <h1 style={{textAlign: 'center'}}> No bookings yet </h1>
        )
    }

    return (
        <li className='booking'>
            <h3 className='booking__title'>{booking.trip.title}</h3>
            <span className='booking__guests'>{booking.guests} guests</span>
            <span className='booking__date'>{booking.date}</span>
            <span className='booking__total'>{booking.totalPrice} $</span>
            <button onClick={()=>dispatch(removeBooking(booking))} className='booking__cancel' title='Cancel booking'>
                <span className='visually-hidden'>Cancel booking</span>
                ×
            </button>
        </li>
    );
};

export default BookingElement;