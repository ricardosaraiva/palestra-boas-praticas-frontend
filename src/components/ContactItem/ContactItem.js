import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';

import {
  Container,
  Detail,
  DetailTitle,
} from './styles';

const ContactItem = ({
  id, name, bookmark, inative, action, detail, contacts,
}) => (
  <>
    <Container
      inative={inative}
      detail={detail}
      onClick={() => action(id)}
    >
      <Avatar name={name} iconName={bookmark ? 'MdStar' : ''} />
      {name}


    </Container>
    {detail && (
      <>
        <Detail>
          <DetailTitle>Telefone: </DetailTitle>
          {' '}
          {contacts?.phone}
        </Detail>
        <Detail>
          <DetailTitle>Email: </DetailTitle>
          {' '}
          {contacts?.email}
        </Detail>
      </>
    )}
  </>
);

ContactItem.defaultProps = {
  inative: false,
  bookmark: false,
  action: null,
  id: null,
  detail: false,
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  action: PropTypes.func,
  id: PropTypes.number,
  inative: PropTypes.bool,
  bookmark: PropTypes.bool,
  detail: PropTypes.bool,
};

export default ContactItem;
