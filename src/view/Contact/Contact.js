import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Header from '../../components/Header/Header';
import ContactList from '../../components/ContactList/ContactList';
import Input from '../../components/Input/Input';

import contactMock from '../../assets/mock/contact.json';

import Container from './styles';
import Button from '../../components/Button/Button';
import ContactItem from '../../components/ContactItem/ContactItem';

const Contact = () => {
  const [detail, setDetail] = useState(null);
  const [search, setSearch] = useState('');
  const [contacts, setContacts] = useState([]);
  const [bookmark, setBookmark] = useState(null);

  useEffect(() => {
    setContacts(contactMock);
  }, []);

  const handleBookMark = () => {
    setBookmark(!bookmark);
    searchContact(search, !bookmark);
  };

  const searchContact = (value, bookmarkCheck) => {
    setContacts(contacts.map((contact) => (
      {
        ...contact,
        inative: (bookmarkCheck && !contact.bookmark)
        || (contact.name.toLowerCase().indexOf(value.toLowerCase()) === -1),
      }
    )));
  };

  const handleSearchForm = (e) => {
    setSearch(e.target.value);
    searchContact(e.target.value, bookmark);
  };

  const buttons = [
    { icon: 'MdStar', action: handleBookMark },
  ];

  return (
    <Container>
      <Header title="CONTACT BOOK" buttons={buttons} active={bookmark ? 0 : null} />
      <Input placeHolder="Search contact" onChange={handleSearchForm} />
      <ContactList
        contacts={contacts}
        action={(id) => setDetail(contacts.filter((item) => item.id === id)[0])}
      />

      <Modal
        isOpen={!!detail}
        onRequestClose={() => setDetail(null)}
        contentLabel="Detalhe do contato"
        style={{
          content: {
            top: '50%',
            left: '50%',
            width: 320,
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
      >
        { !!detail && <ContactItem {...detail} detail /> }
        <Button onClick={() => setDetail(null)}>Fechar</Button>
      </Modal>

    </Container>
  );
};

export default Contact;
