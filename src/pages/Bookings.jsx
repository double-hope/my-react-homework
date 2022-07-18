import React from 'react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import BookingContent from "../components/bookingContent/BookingContent";

const Bookings = () => {

    return (
        <>
            <Header/>
            <BookingContent bookings={JSON.parse(localStorage.getItem('bookings'))}/>
            <Footer/>
        </>
    );
};

export default Bookings;