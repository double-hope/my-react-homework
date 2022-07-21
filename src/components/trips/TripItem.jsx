import React from 'react';
import {useHistory} from 'react-router-dom';
import {tripType} from "../../common/propTypes/propTypes";

const TripItem = ({trip}) => {

    const router = useHistory();

    const click = (e) =>{
        e.preventDefault();
        router.push(`/trip/${trip.title}`);
    }

    return (
        <li className='trip-card'>
            <img src={trip.image} alt='trip image'/>
            <div className='trip-card__content'>
                <div className='trip-info'>
                    <h3 className='trip-info__title'>{trip.title}</h3>
                    <div className='trip-info__content'>
                        <span className='trip-info__duration'><strong>{trip.duration}</strong> days</span>
                        <span className='trip-info__level'>{trip.level}</span>
                    </div>
                </div>
                <div className='trip-price'>
                    <span>Price</span>
                    <strong className='trip-price__value'>{trip.price} $</strong>
                </div>
            </div>
            <button onClick={click} className='button'>Discover a trip</button>
        </li>
    );
};

TripItem.propTypes = {
    trip: tripType.isRequired,
}
export default TripItem;