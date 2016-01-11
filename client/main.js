import {initContext} from './configs/context';
import {initRoutes} from './configs/routes.jsx';
import actions from './actions';

const context = initContext();
initRoutes(context, actions);
