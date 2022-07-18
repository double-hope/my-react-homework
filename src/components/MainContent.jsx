import React, {useState} from 'react';
import '../styles/style.css';
import TripList from "./TripList";
import {useTrips} from "../hooks/useTrips";
import TripsFilter from "./TripsFilter";

const MainContent = () => {

    const tripsData = require('../data/trips.json');

    return (
            <main>
                <h1 className="visually-hidden">Travel App</h1>
                <section className="trips-filter">
                    <h2 className="visually-hidden">Trips filter</h2>
                    <TripsFilter trips={tripsData}/>
                </section>
                <section className="trips">
                    <h2 className="visually-hidden">Trips List</h2>
                    <TripList trips={tripsData}/>
                </section>
            </main>
    );
};

export default MainContent;