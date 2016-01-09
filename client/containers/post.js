import Post from '../components/post/index.jsx';
import {withContext} from '../libs/react-app-context.jsx';
import {composeWithTracker, composeAll} from 'react-komposer';

export const composerFn = ({context, postId}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('posts.single', postId).ready()) {
    const post = Collections.Posts.findOne(postId);
    onData(null, {post});
  } else {
    onData();
  }
};

export default composeAll(
  composeWithTracker(composerFn),
  withContext()
)(Post);
