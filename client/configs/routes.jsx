import {injectDeps} from 'react-simple-di';

import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactLayout} from 'meteor/kadira:react-layout';

import MainLayout from '../components/layouts.main/index.jsx';
import PostList from '../containers/postlist';
import Post from '../containers/post';
import NewPost from '../containers/newpost';


export const initRoutes = (context, actions) => {
  const MainLayoutCtx = injectDeps(context, actions)(MainLayout);

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
