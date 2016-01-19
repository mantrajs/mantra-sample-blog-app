import methodStubs from './configs/method_stubs';
import {bindToContext} from './actions';

export default {
  load(context) {
    methodStubs(context);
    bindToContext(context);
  }
};
