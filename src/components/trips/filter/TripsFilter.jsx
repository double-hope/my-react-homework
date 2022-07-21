import React, {useState} from 'react';
import Select from '../../UI/select/Select';
import {TripKey, TripLevel, TripDuration} from "../../../common/enums/enums";

const TripsFilter = ({trips}) => {

    const [tripName, setTripName] = useState('');

    const sortDurationTrips = (sort) =>{
        let index = 0;
        let cardsCount = 0;
        const cards = document.getElementsByClassName('trip-card');
        switch (sort){
            case TripDuration.FIVE_LESS:
                for(const trip of trips){
                    if(trip.duration > 5)
                        cards[index].style.display = 'none';
                    else{
                        cards[index].style.display = 'flex';
                        cardsCount++;
                    }
                    index++;
                }
                break;
            case TripDuration.TEN_LESS:
                for(const trip of trips){
                    if(trip.duration < 5 || trip.duration > 10)
                        cards[index].style.display = 'none';
                    else{
                        cards[index].style.display = 'flex';
                        cardsCount++;
                    }
                    index++;
                }
                break;
            case TripDuration.TEN_MORE:
                for(const trip of trips){
                    if(trip.duration < 10)
                        cards[index].style.display = 'none';
                    else{
                        cards[index].style.display = 'flex';
                        cardsCount++;
                    }
                    index++;
                }
                break;
            default:
                for(const card of cards){
                    card.style.display = 'flex';
                    cardsCount++;
                }
                break;
        }

        if(!cardsCount){
            console.log('no such trips')
        }

    }

    const sortLevelTrips = (sort) =>{
        let index = 0;
        let cardsCount = 0;
        const cards = document.getElementsByClassName('trip-card');
        switch (sort){
            case TripLevel.EASY:
                for(const trip of trips){
                    if(trip.level !== 'easy')
                        cards[index].style.display = 'none';
                    else{
                        cards[index].style.display = 'flex';
                        cardsCount++;
                    }
                    index++;
                }
                break;
            case TripLevel.MODERATE:
                for(const trip of trips){
                    if(trip.level !== 'moderate')
                        cards[index].style.display = 'none';
                    else{
                        cards[index].style.display = 'flex';
                        cardsCount++;
                    }
                    index++;
                }
                break;
            case TripLevel.DIFFICULT:
                for(const trip of trips){
                    if(trip.level !== 'difficult')
                        cards[index].style.display = 'none';
                    else{
                        cards[index].style.display = 'flex';
                        cardsCount++;
                    }
                    index++;
                }
                break;
            default:
                for(const card of cards){
                    card.style.display = 'flex';
                    cardsCount++;
                }
                break;
        }

        if(!cardsCount){
            console.log('no such trips')

        }
    }

    const change = (e) =>{
        setTripName(e.target.value);

        let index = 0;
        const cards = document.getElementsByClassName('trip-card');
        for(const trip of trips){
            const title = trip.title.toLowerCase();
            if(title.includes(tripName))
                cards[index].style.display = 'flex';
            else{
                cards[index].style.display = 'none';
            }
            index++;
        }
    }


    return (
        <form className='trips-filter__form' autoComplete='off'>
            <label className='trips-filter__search input'>
                <span className='visually-hidden'>Search by name</span>
                <input
                    value={tripName}
                    onChange={change}
                    name='search'
                    type='search'
                    placeholder='search by title'/>
            </label>
            <label className='select'>
                <span className='visually-hidden'>Search by duration</span>
                <Select
                    onChange={sortDurationTrips}
                    defaultValue={'duration'}
                    selectName={'duration'}
                    options={[
                        {value: TripDuration.FIVE_LESS, name: '< 5 days'},
                        {value: TripDuration.TEN_LESS, name: '< 10 days'},
                        {value: TripDuration.TEN_MORE, name: '≥ 10 days'}
                    ]}
                />
            </label>
            <label className='select'>
                <span className='visually-hidden'>Search by level</span>
                <Select
                    onChange={sortLevelTrips}
                    defaultValue={'level'}
                    selectName={'level'}
                    options={[
                        {value: TripLevel.EASY, name: 'easy'},
                        {value: TripLevel.MODERATE, name: 'moderate'},
                        {value: TripLevel.DIFFICULT, name: 'difficult'}
                    ]}
                />
            </label>
        </form>
    );
};

export default TripsFilter;