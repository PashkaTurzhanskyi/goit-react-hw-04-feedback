import React from 'react';
import { Container, Title } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    {children}
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
