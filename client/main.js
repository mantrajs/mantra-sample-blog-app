import loadMethodStubs from './configs/method_stubs';
import {initContext} from './configs/context';
import {initRoutes} from './configs/routes.jsx';
import actions from './actions';

import commentsModule from './modules/comments';

loadMethodStubs();
const context = initContext();
initRoutes(context, actions);
commentsModule.load(context);
