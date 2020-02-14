import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import '../src/index.css';

addDecorator(withInfo({
  inline: true,
  header: false,
}));

addParameters({
  options: {
    showPanel: false,
  },
});

configure(require.context('../src/stories', true, /\.stories\.js$/), module);
