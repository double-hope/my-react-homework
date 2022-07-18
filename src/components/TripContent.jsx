import React, {useState} from 'react';
import '../styles/style.css';
import Modal from "./UI/modal/Modal";


const TripContent = ({trip}) => {

    const [modal, setModal] = useState(false);

    return (
        <main className="trip-page">
            <Modal visible={modal} setVisible={setModal} trip={trip}/>
            <h1 className="visually-hidden">Travel App</h1>
            <div className="trip">
                <img src={trip.image} className="trip__img" alt="trip image"/>
                <div className="trip__content">
                    <div className="trip-info">
                        <h3 className="trip-info__title">{trip.title}</h3>
                        <div className="trip-info__content">
                            <span className="trip-info__duration"><strong>{trip.duration}</strong> days</span>
                            <span className="trip-info__level">{trip.level}</span>
                        </div>
                    </div>
                    <div className="trip__description">
                        {trip.description}
                    </div>
                    <div className="trip-price">
                        <span>Price</span>
                        <strong className="trip-price__value">{trip.price} $</strong>
                    </div>
                    <button onClick={() => setModal(true)} className="trip__button button">Book a trip</button>
                </div>
            </div>
        </main>
    );
};

export default TripContent;