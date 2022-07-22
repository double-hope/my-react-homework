import React, {useEffect, useState} from 'react';
import '../../assets/styles/style.css';
import TripList from './TripList';
import TripsFilter from './filter/TripsFilter';
import Loader from '../UI/loader/Loader';
import {useDispatch, useSelector} from "react-redux";
import {fetchTrips} from '../../store/trips/actions';
import {DataStatus} from "../../common/enums/app/dataStatusEnum";

const MainContent = () => {

    const { trips, status } = useSelector(({ trips }) => ({
        trips: trips.trips,
        status: trips.status,
    }));

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchTrips());
    }, [dispatch]);

    if(status === DataStatus.PENDING)
        return (
            <>
                <main style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                    <Loader/>
                </main>
            </>

        );


    return (
            <main>
                <h1 className='visually-hidden'>Travel App</h1>
                <section className='trips-filter'>
                    <h2 className='visually-hidden'>Trips filter</h2>
                    <TripsFilter trips={trips}/>
                </section>
                <section className='trips'>
                    <h2 className='visually-hidden'>Trips List</h2>
                    {trips.length
                        ?<TripList trips={trips}/>
                        :<Loader/>
                    }
                </section>
            </main>
    );
};

export default MainContent;