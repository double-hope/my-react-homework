import React from 'react';
import TripContent from '../components/trips/TripContent';
import Footer from '../components/UI/footer/Footer';
import {useParams} from 'react-router-dom';
import trips from '../database.json';

const TripNamePage = () => {

    const title = useParams();

    function tripByTitle(){
        for(const trip of trips.trips){
            if(trip.title === title.title){
                return trip;
            }

        }
    }

    return (
        <>
            <TripContent trip={tripByTitle()}/>
            <Footer/>
        </>
    );
};

export default TripNamePage;