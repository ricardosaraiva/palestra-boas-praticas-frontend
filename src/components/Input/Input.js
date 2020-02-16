import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Input as InputElment,
} from './styles';

const Input = ({ placeHolder, onChange }) => (
  <Container>
    <InputElment type="text" placeholder={placeHolder} onChange={onChange} />
  </Container>
);

Input.defaultProps = {};

Input.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
