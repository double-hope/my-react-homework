import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { addBooking } from '../../../store/bookings/actions';
import { idGenerator } from '../../../helpers/helpers';

const Modal = ({visible, setVisible, trip}) => {

    const [date, setDate] = useState('');
    const [people, setPeople] = useState(1);
    const classes = ['modal'];
    const dispatch = useDispatch();

    if(visible)
        classes.push('active')

    const createBooking = () => {
        // if(!date){
        //     alert('Choose date');
        //     return;
        // }
        const booking = {
            id: idGenerator(),
            userId: idGenerator(),
            tripId: trip.id,
            guests: people,
            date: date,
            trip: {
                title: trip.title,
                duration: trip.duration,
                price: trip.price
            },
            totalPrice: trip.price * people,
            createdAt: new Date().toISOString()
        }

        dispatch(addBooking(booking));

        setVisible(false);
    }

    return (
        <div className={classes.join(' ')} onClick={() => setVisible(false)}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                <div className='trip-info'>
                    <button onClick={() => setVisible(false)} className='booking__cancel' title='Cancel booking'>
                        <span className='visually-hidden'>Cancel booking</span>
                        ×
                    </button>
                    <h3 className='trip-info__title'>{trip.title}</h3>
                    <div className='trip-info__content'>
                        <span className='trip-info__duration'><strong>{trip.duration}</strong> days</span>
                        <span className='trip-info__level'>{trip.level}</span>
                    </div>
                </div>
                <div className='trip__description'>
                    <p>Date:</p>
                    <input value={date} onChange={e => setDate(e.target.value)} type='date'/>
                </div>
                <div className='trip__description'>
                    <p>Number of guests:</p>
                    <input value={people} onChange={e => setPeople(e.target.value)} type='number'/>
                </div>
                <div className='trip-price-modal'>
                    <span>Total</span>
                    <span><b>{trip.price * people} $</b></span>
                </div>
                <button onClick={createBooking} className='trip__button button'>Book a trip</button>
            </div>
        </div>
    );
};

export default Modal;
