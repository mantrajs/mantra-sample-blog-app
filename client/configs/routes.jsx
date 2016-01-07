import {applyContext, withContext} from '../libs/react-app-context.jsx';
import context from './context';
import MainLayout from '../components/layouts/main.jsx';
import Version from '../containers/version';

const actions = {};
const MainLayoutCtx = applyContext(context, actions)(MainLayout);


FlowRouter.route('/', {
  name: 'home',
  action() {
    ReactLayout.render(MainLayoutCtx, {
      content: () => (<Version />)
    });
  }
});
