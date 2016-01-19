import loadMethodStubs from '/imports/configs/method_stubs';
import {initContext} from '/imports/configs/context';
import routes from '/imports/configs/routes.jsx';
import actions from '/imports/actions';
import {createApp} from '/imports/libs/mantra';

import commentsModule from '/imports/modules/comments';

loadMethodStubs();
const context = initContext();
commentsModule.load(context);

const app = createApp(context, actions);
app.loadRoutes(routes);

/*

import loadContext from './configs/context';
import routes from './configs/routes.jsx';

import mainModule from './modules/main';
import commentsModule from './modules/comments';
import blogModule from 'abc-blog-module';

import {createApp} from 'mantra';

const app = createApp(loadContext());
app.loadModule(mainModule);
app.loadModule(commentsModule);
app.loadModule(blogModule);
app.loadRoutes(routes);

*/
