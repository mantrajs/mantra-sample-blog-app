import { configure } from '@kadira/storybook';

function loadStories() {
  require('../client/modules/core/components/.stories');
  // require as many as stories you need.
}

configure(loadStories, module);
