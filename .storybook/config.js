import { configure } from '@kadira/storybook';
import { setStubbingMode } from 'react-komposer';

// Enable react-komposer stubbing.
// See: https://github.com/kadirahq/react-komposer#stubbing
setStubbingMode(true);

function loadStories() {
  require('../client/modules/core/components/.stories');
  require('../client/modules/comments/components/.stories');
  // require as many as stories you need.
}

configure(loadStories, module);
