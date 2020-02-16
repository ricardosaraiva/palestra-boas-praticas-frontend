import React from 'react';
import PropTypes from 'prop-types';

import Container from './styles';

const Button = ({
  children, className, onClick, active,
}) => (
  <Container
    onClick={onClick}
    className={className}
    active={active}
  >
    {children}
  </Container>
);

Button.defaultProps = {
  className: '',
  active: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  active: PropTypes.bool,
};

export default Button;
