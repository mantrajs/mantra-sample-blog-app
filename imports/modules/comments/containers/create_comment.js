import {
  useDeps, composeWithTracker, composeAll
} from '../../../libs/mantra';
import Component from '../components/create_comment.jsx';

export const composer = ({context}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('CREATE_COMMENT_ERROR');
  onData(null, {error});
};

export const depsMapper = (context, actions) => ({
  create: actions.comments.create,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
