import methodStubs from './configs/method_stubs';
import {bindToContext} from './actions';
import actions from './actions';

export default {
  load(context) {
    methodStubs(context);
    bindToContext(context);
  }
};
