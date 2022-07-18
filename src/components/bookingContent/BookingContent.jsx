import React from 'react';
import '../../styles/style.css';
import BookingElement from "../BookingElement";

const BookingContent = ({bookings}) => {
    if(!bookings){
        return(
            <main className="bookings-page">
                <h1 className="visually-hidden">Travel App</h1>
                <h1> No bookings yet </h1>
            </main>
        )
    }


    if(bookings.length){
        return (
            <main className="bookings-page">
                <h1 className="visually-hidden">Travel App</h1>
                <ul className="bookings__list">

                    {bookings.map(booking =>
                        <BookingElement key={booking.id} booking={booking}/>
                    )}
                </ul>
            </main>
        );
    }
    else {
        return (
            <main className="bookings-page">
                <h1 className="visually-hidden">Travel App</h1>
                <ul className="bookings__list">

                    <BookingElement key={bookings.id} booking={bookings}/>

                </ul>
            </main>
        );
    }

};

export default BookingContent;