import React from 'react';
import PropTypes from 'prop-types';
import { Message } from './Notification.styled';

export const Notification = ({ message }) => (
  <div>
    <Message>{message}</Message>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
