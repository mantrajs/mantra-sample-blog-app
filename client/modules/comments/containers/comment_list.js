import Component from '../components/comment_list.jsx';
import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const composer = ({context, clearErrors, postId}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('posts.comments', postId).ready()) {
    const comments = Collections.Comments.find({postId}).fetch();
    onData(null, {comments});
  } else {
    onData();
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Component);
