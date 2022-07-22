import PropTypes from 'prop-types';
import { UserInfo } from '../../enums/enums';

const userSignIn = PropTypes.exact({
    [UserInfo.EMAIL]: PropTypes.string.isRequired,
    [UserInfo.PASSWORD]: PropTypes.string.isRequired,
});

export { userSignIn };

