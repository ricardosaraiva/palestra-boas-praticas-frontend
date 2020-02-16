import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import Title from '../Title';

import {
  Container,
  ContainerButtons,
} from './styles';

const Header = ({ title, buttons, active }) => (
  <Container>
    <Title text={title} dark />
    <ContainerButtons>
      {buttons.map(({ icon, action }, i) => (
        <IconButton key={icon} iconName={icon} onClick={action} active={active === i} />
      ))}
    </ContainerButtons>
  </Container>
);

Header.defaultProps = {
  active: -1,
};

Header.propTypes = {
  active: PropTypes.number,
  title: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      action: PropTypes.func.isRequired,
    }),
  ).isRequired,
};

export default Header;
