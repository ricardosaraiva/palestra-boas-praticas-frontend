import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';

import Container from './styles';

const ContactList = ({ contacts, action }) => {
  const contactsClone = [...contacts];
  contactsClone.sort((a, b) => {
    if (a.name === b.name) {
      return 0;
    }

    return a.name > b.name ? 1 : -1;
  });

  return (
    <Container>
      { contactsClone.map((contact, index) => (
        <ContactItem {...contact} key={contact.id} action={action} index={index} />
      )) }
    </Container>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    bookmark: PropTypes.bool,
  })).isRequired,
  name: PropTypes.func.isRequired,
};

export default ContactList;
