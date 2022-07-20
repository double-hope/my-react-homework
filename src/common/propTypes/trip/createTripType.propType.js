import PropTypes from 'prop-types';
import { TripKey, userInfo } from '../../enums/enums';

const createTripType = PropTypes.exact({
    [TripKey.ID]: PropTypes.string.isRequired,
    [TripKey.USER_ID]: PropTypes.oneOf(Object.values(userInfo)).isRequired,
    [TripKey.TRIP_ID]: PropTypes.string.isRequired,
    [TripKey.GUESTS]: PropTypes.number.isRequired,
    [TripKey.DATE]: PropTypes.string.isRequired,
    [TripKey.TRIP]: PropTypes.object.isRequired,
    [TripKey.TOTAL_PRICE]: PropTypes.number.isRequired,
    [TripKey.CREATED_AT]: PropTypes.string.isRequired,
});

export { createTripType };

