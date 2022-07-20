import React, {useEffect, useState} from 'react';
import '../styles/style.css';
import TripList from './TripList';
import TripsFilter from './TripsFilter';
import Loader from './UI/loader/Loader';

const MainContent = () => {

    const [trips, setTrips] = useState([]);

    useEffect(() =>{
        getData();
    }, [])

    const getData = () =>{
        const tripsData = require('../trips.json');
        setTrips(tripsData.trips);
    }

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