import React from 'react';
import { storiesOf } from '@kadira/storybook';
import PostList from '../postlist';

storiesOf('core.PostList', module)
  .add('default view', () => {
    const posts = [
      {_id: 'one', title: 'React is Superb'},
      {_id: 'two', title: 'Meteor is Great'},
      {_id: 'three', title: 'Mantra is Amazing'},
    ];

    return (
      <PostList posts={posts} />
    );
  });
