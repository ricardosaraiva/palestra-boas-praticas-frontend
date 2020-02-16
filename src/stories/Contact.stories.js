import React from 'react';
import { storiesOf } from '@storybook/react';
import ContactItem from '../components/ContactItem';
import ContactList from '../components/ContactList';

const contacts = [
  { id: 1, name: 'Ricardo', bookmark: false },
  { id: 2, name: 'Bruno', bookmark: false },
  { id: 3, name: 'Felipe', bookmark: false },
  { id: 4, name: 'Orlando', bookmark: true },
  { id: 5, name: 'Marcos', bookmark: false },
];

storiesOf('Contact', module)
  .add('Single item', () => <ContactItem name="Ricardo Saraiva" />)
  .add('Single item bookmark', () => <ContactItem name="Ricardo Saraiva" bookmark />)
  .add('List items', () => <ContactList contacts={contacts} />);
