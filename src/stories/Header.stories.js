import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../components/Header';


const buttons = [
  { icon: 'MdPerson', action: () => null },
  { icon: 'MdEmail', action: () => null },
];

storiesOf('Header', module)
  .add('Default', () => (
    <Header
      title="My Title"
      buttons={buttons}
    />
  ));
