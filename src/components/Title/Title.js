import React from 'react';
import PropTypes from 'prop-types';

import Container from './styles';

const Title = ({ text, dark }) => (
  <Container dark={dark}>
    {text}
  </Container>
);

Title.defaultProps = {
  dark: false,
};

Title.propTypes = {
  dark: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

export default Title;
