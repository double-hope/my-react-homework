import {useMemo} from 'react';

export const useSortedTrips = (trips, sort) => {
    const sortedTrips = useMemo(() => {
        if(sort) {
            return [...trips].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return trips;
    }, [sort, trips])

    return sortedTrips;
}

export const useTrips = (trips, sortDuration, sortLevel, query) => {
    const sortedTripsDuration = useSortedTrips(trips, sortDuration);
    const sortedTrips = [...sortedTripsDuration, ...useSortedTrips(trips, sortLevel)];

    const sortedAndSearchedTrips = useMemo(() => {
        return sortedTrips.filter(trip => trip.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedTrips])

    return sortedAndSearchedTrips;
}