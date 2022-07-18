import React from 'react';
import Header from "../components/UI/header/Header";
import Footer from "../components/UI/footer/Footer";
import BookingContent from "../components/BookingContent";

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