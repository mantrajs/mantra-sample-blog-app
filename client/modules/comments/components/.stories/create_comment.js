import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import CreateComment from '../create_comment';

storiesOf('comments.CreateComment', module)
  .add('default view', () => {
    return (
      <div className='comments'>
        <CreateComment postId='the-id' create={action('create comment')}/>
      </div>
    );
  })
  .add('with error', () => {
    return (
      <div className='comments'>
        <CreateComment
          error='This is the error message'
          postId='the-id'
          create={action('create comment')}
        />
      </div>
    );
  });
