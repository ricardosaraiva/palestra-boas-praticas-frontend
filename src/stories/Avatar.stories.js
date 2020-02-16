import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from '../components/Avatar';
import imgAvatar from '../assets/images/avatar.png';

storiesOf('Avatar', module)
  .add('Without image', () => <Avatar name="Ricardo" />)
  .add('With image', () => <Avatar name="Ricardo" img={imgAvatar} />)
  .add('Without icon', () => <Avatar name="Ricardo" iconName="MdStar" />);
