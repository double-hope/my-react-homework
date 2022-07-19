import React from 'react';

const BookingElement = ({booking}) => {

    const bookingInfo = JSON.parse(localStorage.getItem('bookings'));

    if(!bookingInfo.length && typeof bookingInfo !== 'object'){
        return(
            <h1 style={{textAlign: 'center'}}> No bookings yet </h1>
        )
    } else if(!bookingInfo.id){
        return(
            <h1 style={{textAlign: 'center'}}> No bookings yet </h1>
        )
    }

    const remove = (e) =>{

        const tripsList = document.getElementsByClassName('booking__title');
        const bookingInfo = JSON.parse(localStorage.getItem('bookings'));

        let newBookings = [];

        if(!bookingInfo.length){
            if (booking.trip.title !== bookingInfo.trip.title)
                newBookings.push(bookingInfo);
        }
        else{
            for(const book of bookingInfo){
                if (booking.trip.title !== book.trip.title)
                    newBookings.push(book);
            }
        }

        if(newBookings.length) localStorage.setItem('bookings', JSON.stringify(newBookings));
        else localStorage.removeItem('bookings');

        for (const trip of tripsList) {
            if(trip.innerHTML === booking.trip.title){
                trip.parentElement.remove();
            }
        }

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