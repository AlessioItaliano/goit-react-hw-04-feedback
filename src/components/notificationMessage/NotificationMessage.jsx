import PropTypes from 'prop-types';
import { InfoMessage } from './NotificationMessage.styled';

const NotificationMessage = ({ message }) => {
  return <InfoMessage>{message}</InfoMessage>;
};

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NotificationMessage;
