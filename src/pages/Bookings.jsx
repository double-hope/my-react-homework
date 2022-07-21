import React, { useEffect } from 'react';
import Header from '../components/UI/header/Header';
import Footer from '../components/UI/footer/Footer';
import BookingContent from "../components/bookings/BookingContent";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings } from '../store/bookings/actions';
import { DataStatus } from '../common/enums/enums';
import Loader from '../components/UI/loader/Loader';

const Bookings = () => {

    const { bookings, status } = useSelector(({ bookings }) => ({
            bookings: bookings.bookings,
            status: bookings.status,
    }));

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchBookings());
    }, [dispatch]);

    if(status !== DataStatus.SUCCESS)
        return (
            <>
                <Header/>
                <main className='bookings-page'>
                    <ul className='bookings__list'>
                        <Loader/>
                    </ul>
                </main>
                <Footer/>
            </>

        );

    return (
        <>
            <Header/>
            <BookingContent bookings={bookings}/>
            <Footer/>
        </>
    );
};

export default Bookings;