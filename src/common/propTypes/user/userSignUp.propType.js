import PropTypes from 'prop-types';
import { UserInfo } from '../../enums/enums';

const userSignUp = PropTypes.exact({
    [UserInfo.NAME]: PropTypes.string.isRequired,
    [UserInfo.EMAIL]: PropTypes.string.isRequired,
    [UserInfo.PASSWORD]: PropTypes.string.isRequired,
});

export { userSignUp };

