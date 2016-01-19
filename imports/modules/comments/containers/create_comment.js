import Component from '../components/create_comment.jsx';
import {useDeps} from 'react-simple-di';
import {composeAll, composeWithTracker} from 'react-komposer';
// we should not import the action like this.
import actions from '../actions';
console.log(actions);

export const composer = ({context}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('CREATE_COMMENT_ERROR');
  onData(null, {error});
};

export const depsMapper = (context) => ({
  create: actions.comments.create,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
