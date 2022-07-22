import React from 'react';
import '../../assets/styles/style.css';
import BookingElement from './BookingElement';

const BookingContent = ({bookings}) => {

    if(!bookings.length){
        return(
            <main className='bookings-page'>
                <h1 className='visually-hidden'>Travel App</h1>
                <h1 style={{textAlign: 'center'}}> No bookings yet </h1>
            </main>
        )
    }
    else {
        bookings = bookings.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
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