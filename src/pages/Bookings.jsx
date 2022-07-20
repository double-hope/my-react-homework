import React, {useContext} from 'react';
import Header from '../components/UI/header/Header';
import Footer from '../components/UI/footer/Footer';
import {BookedContext} from "../context";
import BookingContent from "../components/BookingContent";

const Bookings = () => {

    const {bookedTrips} = useContext(BookedContext);

    return (
        <>
            <Header/>
            <BookingContent bookings={bookedTrips}/>
            <Footer/>
        </>
    );
};

export default Bookings;