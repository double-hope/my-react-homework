import React from 'react';

const BookingElement = ({booking}) => {
    return (
        <li className="booking">
            <h3 className="booking__title">{booking.trip.title}</h3>
            <span className="booking__guests">{booking.guests} guests</span>
            <span className="booking__date">{booking.date}</span>
            <span className="booking__total">{booking.totalPrice} $</span>
            <button className="booking__cancel" title="Cancel booking">
                <span className="visually-hidden">Cancel booking</span>
                ×
            </button>
        </li>
    );
};

export default BookingElement;