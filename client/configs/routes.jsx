import {applyContext} from '../libs/react-app-context.jsx';
import context from './context';
import actions from '../actions';

import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactLayout} from 'meteor/kadira:react-layout';

import MainLayout from '../components/layouts/main.jsx';
import PostList from '../containers/postlist';
import Post from '../containers/post';
import NewPost from '../containers/newpost';

const MainLayoutCtx = applyContext(context, actions)(MainLayout);

export const initRoutes = () => {
  // Move these as a module and call this from a main file
  FlowRouter.route('/', {
    name: 'posts.list',
    action() {
      ReactLayout.render(MainLayoutCtx, {
        content: () => (<PostList />)
      });
    }
  });

  FlowRouter.route('/post/:postId', {
    name: 'posts.single',
    action({postId}) {
      ReactLayout.render(MainLayoutCtx, {
        content: () => (<Post postId={postId}/>)
      });
    }
  });

  FlowRouter.route('/new-post', {
    name: 'newpost',
    action() {
      ReactLayout.render(MainLayoutCtx, {
        content: () => (<NewPost/>)
      });
    }
  });
};
