import React from 'react';
import {useHistory} from 'react-router-dom';

const TripItem = (props) => {

    const router = useHistory();

    const click = (e) =>{
        e.preventDefault();
        router.push(`/trip/${props.trip.title}`);
    }

    return (
        <li className='trip-card'>
            <img src={props.trip.image} alt='trip image'/>
            <div className='trip-card__content'>
                <div className='trip-info'>
                    <h3 className='trip-info__title'>{props.trip.title}</h3>
                    <div className='trip-info__content'>
                        <span className='trip-info__duration'><strong>{props.trip.duration}</strong> days</span>
                        <span className='trip-info__level'>{props.trip.level}</span>
                    </div>
                </div>
                <div className='trip-price'>
                    <span>Price</span>
                    <strong className='trip-price__value'>{props.trip.price} $</strong>
                </div>
            </div>
            <button onClick={click} className='button'>Discover a trip</button>
        </li>
    );
};

export default TripItem;