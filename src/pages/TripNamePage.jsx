import React from 'react';
import TripContent from '../components/trips/TripContent';
import Footer from '../components/UI/footer/Footer';
import {useParams} from 'react-router-dom';
import trips from '../database.json';

const TripNamePage = () => {

    const id = useParams();

    function tripById(){
        for(const trip of trips.trips){
            if(trip.id === id.id){
                return trip;
            }
        }
    }

    return (
        <>
            <TripContent trip={tripById()}/>
            <Footer/>
        </>
    );
};

export default TripNamePage;