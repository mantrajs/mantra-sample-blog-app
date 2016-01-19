import Component from '../components/create_comment.jsx';
import {useDeps} from 'react-simple-di';
import {composeAll} from 'react-komposer';
import actions from '../actions';

export const depsMapper = (context) => ({
  create: actions.comments.create.bind(null, context)
});

export default composeAll(
  useDeps(depsMapper)
)(Component);
