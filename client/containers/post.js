import Post from '../components/post/index.jsx';
import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const composer = ({context, postId}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('posts.single', postId).ready()) {
    const post = Collections.Posts.findOne(postId);
    onData(null, {post});
  } else {
    onData();
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Post);
