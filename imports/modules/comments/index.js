import methodStubs from './configs/method_stubs';
import actions from './actions';

export default {
  actions,
  load(context) {
    methodStubs(context);
  }
};
