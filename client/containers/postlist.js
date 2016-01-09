import PostList from '../components/postlist/index.jsx';
import {withContext, composeAll} from '../libs/react-app-context.jsx';
import {composeWithTracker} from 'react-komposer';

export const composerFn = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('posts.list').ready()) {
    const posts = Collections.Posts.find().fetch();
    onData(null, {posts});
  }
};

export default composeAll(
  composeWithTracker(composerFn),
  withContext()
)(PostList);
