import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import CommentList from '../comment_list';
import CreateComment from '../../containers/create_comment';

// Create the stub for the composer.
setComposerStub(CreateComment, (props) => {
  const data = {
    ...props,
    create: action('create comment'),
  };

  return data;
});

storiesOf('comments.CommentList', module)
  .add('no comments', () => {
    return (
      <CommentList comments={[]}/>
    );
  })
  .add('with comments', () => {
    const comments = [
      {_id: 'one', text: 'This is cool.', author: 'arunoda'},
      {_id: 'two', text: 'Yeah! I agree.', author: 'sacha'},
    ];
    return (
      <CommentList comments={comments}/>
    );
  })
  .add('saving a comment', () => {
    const comments = [
      {_id: 'one', text: 'This is a new comment.', author: 'arunoda', saving: true},
      {_id: 'two', text: 'Yeah! I agree.', author: 'sacha'},
    ];
    return (
      <CommentList comments={comments}/>
    );
  });
