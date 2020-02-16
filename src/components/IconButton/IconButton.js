import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from 'react-icons/md';

import Colors from '../../theme/Colors';

import Container from './styles';

const IconButton = (props) => {
  const { iconName } = props;
  const Icon = Icons[iconName];

  return (
    <Container {...props}>
      <Icon color={Colors.foreground._100} size={28} />
    </Container>
  );
};

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
};

export default IconButton;
