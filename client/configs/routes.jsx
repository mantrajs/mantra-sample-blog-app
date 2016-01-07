import {applyContext, withContext} from '../libs/react-app-context.jsx';
import context from './context';
import actions from '../actions';

import MainLayout from '../components/layouts/main.jsx';
import PostList from '../containers/postlist';
import Post from '../containers/post';

const MainLayoutCtx = applyContext(context, actions)(MainLayout);

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
