import React, {useContext} from 'react';
import {BookedContext} from "../context";

const BookingElement = ({booking}) => {

    const {bookedTrips, setBookedTrips} = useContext(BookedContext);

    if(!bookedTrips.length){
        return(
            <h1 style={{textAlign: 'center'}}> No bookings yet </h1>
        )
    }

    const remove = (e) =>{
        setBookedTrips(bookedTrips.filter(trip => trip.id !== booking.id));
    }

    return (
        <li className='booking'>
            <h3 className='booking__title'>{booking.trip.title}</h3>
            <span className='booking__guests'>{booking.guests} guests</span>
            <span className='booking__date'>{booking.date}</span>
            <span className='booking__total'>{booking.totalPrice} $</span>
            <button onClick={remove} className='booking__cancel' title='Cancel booking'>
                <span className='visually-hidden'>Cancel booking</span>
                ×
            </button>
        </li>
    );
};

export default BookingElement;