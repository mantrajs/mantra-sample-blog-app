import NewPost from '../components/newpost/index.jsx';
import {withContext, composeAll} from '../libs/react-app-context.jsx';
import {composeWithTracker} from 'react-komposer';

export const composerFn = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const saving = Boolean(LocalState.get('SAVING_NEW_POST'));
  const error = LocalState.get('SAVING_ERROR');
  onData(null, {saving, error});

  // clearErrors when unmounting the component
  return clearErrors;
};

export const bindPropsFn = (context, actions) => ({
  create: actions.posts.create,
  clearErrors: actions.posts.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composerFn),
  withContext(bindPropsFn)
)(NewPost);
