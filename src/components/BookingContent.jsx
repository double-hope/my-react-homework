import React from 'react';
import '../styles/style.css';
import BookingElement from './BookingElement';

const BookingContent = ({bookings}) => {

    if(!bookings){
        return(
            <main className='bookings-page'>
                <h1 className='visually-hidden'>Travel App</h1>
                <h1 style={{textAlign: 'center'}}> No bookings yet </h1>
            </main>
        )
    }
    else {
        if(bookings.length){
            bookings.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
        }
    }

    return (
        <main className='bookings-page'>
            <h1 className='visually-hidden'>Travel App</h1>
            <ul className='bookings__list'>
                    {bookings.length
                        ? bookings.map(booking =>
                            <BookingElement key={booking.id} booking={booking}/>)
                        : <BookingElement key={bookings.id} booking={bookings}/>
                    }
            </ul>
        </main>
    );
};

export default BookingContent;