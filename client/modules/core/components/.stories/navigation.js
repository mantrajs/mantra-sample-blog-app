import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Navigation from '../navigation';

storiesOf('core.Navigation', module)
  .add('default view', () => {
    return (
      <Navigation />
    );
  });
