import PropTypes from 'prop-types';
import { TripKey, TripLevel } from '../../enums/enums';

const tripType = PropTypes.exact({
    [TripKey.ID]: PropTypes.string.isRequired,
    [TripKey.TITLE]: PropTypes.string.isRequired,
    [TripKey.DESCRIPTION]: PropTypes.string.isRequired,
    [TripKey.LEVEL]: PropTypes.oneOf(Object.values(TripLevel)).isRequired,
    [TripKey.DURATION]: PropTypes.number.isRequired,
    [TripKey.PRICE]: PropTypes.number.isRequired,
    [TripKey.IMAGE]: PropTypes.string.isRequired,
    [TripKey.CREATED_AT]: PropTypes.string.isRequired,
});

export { tripType };