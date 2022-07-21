import React, { useEffect } from 'react';
import Header from '../components/UI/header/Header';
import Footer from '../components/UI/footer/Footer';
import BookingContent from "../components/BookingContent";
import {useDispatch, useSelector} from 'react-redux';
import { fetchBookings } from '../store/bookings/actions';

const Bookings = () => {

    const { bookings } = useSelector(({ bookings }) => ({
            bookings: bookings.bookings,
    }));

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchBookings());
    }, [dispatch]);

    return (
        <>
            <Header/>
            <BookingContent bookings={bookings}/>
            <Footer/>
        </>
    );
};

export default Bookings;