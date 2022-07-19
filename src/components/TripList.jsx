import React, {useState} from 'react';
import TripItem from './TripItem';

const TripList = ({trips}) => {
    return (
        <ul className='trip-list'>
            {trips.map(trip=>
                <TripItem key={trip.id} trip={trip}/>
            )}
        </ul>
    );
};

export default TripList;