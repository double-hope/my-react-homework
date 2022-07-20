import React, {useContext} from 'react';
import Header from '../components/UI/header/Header';
import Footer from '../components/UI/footer/Footer';
import BookingContent from "../components/BookingContent";
import {useSelector} from 'react-redux';

const Bookings = () => {

    const bookings = useSelector(state => state.bookings.bookings);

    return (
        <>
            <Header/>
            <BookingContent bookings={bookings}/>
            <Footer/>
        </>
    );
};

export default Bookings;