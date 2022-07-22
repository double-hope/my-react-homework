import React from 'react';
import PropTypes from 'prop-types';
import TripItem from './TripItem';
import {tripType} from '../../common/propTypes/trip/trip';

const TripList = ({trips}) => {

    return (
        <ul className='trip-list'>
            {trips.map(trip=>
                <TripItem key={trip.id} trip={trip}/>
            )}
        </ul>
    );
};

TripList.propTypes = {
    trips: PropTypes.arrayOf(tripType.isRequired).isRequired,
};

export default TripList;