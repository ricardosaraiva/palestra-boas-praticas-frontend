import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from 'react-icons/md';

import {
  Container,
  Image,
  IconContainer,
} from './styles';
import { Colors } from '../../theme';

const Avatar = ({ name, img, iconName }) => {
  const Icon = Icons[iconName];
  return (
    <Container>
      {!!iconName && (
        <IconContainer>
          <Icon color={Colors.yellow._500} size={16} />
        </IconContainer>
      )}
      {!img && name[0].toUpperCase()}
      {!!img && <Image src={img} alt={name} />}
    </Container>
  );
};

Avatar.defaultProps = {
  img: null,
  iconName: '',
};

Avatar.propTypes = {
  iconName: PropTypes.string,
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
};

export default Avatar;
