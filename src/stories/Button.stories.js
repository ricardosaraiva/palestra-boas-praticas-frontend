import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/Button';
import IconButton from '../components/IconButton';

storiesOf('Button', module)
  .add('Default', () => <Button onClick={() => null}>Button</Button>)
  .add('Button icon', () => <IconButton iconName="MdStar" onClick={() => null} />);
