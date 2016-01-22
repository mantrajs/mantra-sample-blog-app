import loadMethodStubs from '/imports/configs/method_stubs';
import {initContext} from '/imports/configs/context';
import routes from '/imports/configs/routes.jsx';
import actions from '/imports/actions';
import {createApp} from '/imports/libs/mantra';

import commentsModule from '/imports/modules/comments';

loadMethodStubs();
const context = initContext();

const app = createApp(context, actions);
app.loadModule(commentsModule);
app.loadRoutes(routes);
