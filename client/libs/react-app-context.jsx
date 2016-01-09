// XXX: Move this into a NPM module
import {React} from 'meteor/react-runtime';

export function applyContext(context, _actions) {
  const actions = {};
  for (let key in _actions) {
    if (_actions.hasOwnProperty(key)) {
      const actionMap = _actions[key];
      for (let actionName in actionMap) {
        if (actionMap.hasOwnProperty(actionName)) {
          actionMap[actionName] = actionMap[actionName].bind(null, context);
        }
      }
      actions[key] = actionMap;
    }
  }

  return function (ChildComponent) {
    const Context = React.createClass({
      childContextTypes: {
        context: React.PropTypes.object,
        actions: React.PropTypes.object
      },

      getChildContext() {
        return {
          context,
          actions
        };
      },

      render() {
        return (<ChildComponent {...this.props} />);
      }
    });

    return Context;
  };
}

const defaultMapper = (context, actions) => ({
  context: () => context,
  actions: () => actions
});

export function withContext(mapper = defaultMapper) {
  return function (ChildComponent) {
    const ContextWrapper = React.createClass({
      render() {
        const {context, actions} = this.context;
        const mappedProps = mapper(context, actions);

        const newProps = {
          ...this.props,
          ...mappedProps
        };

        return (<ChildComponent {...newProps} />);
      },

      contextTypes: {
        context: React.PropTypes.object,
        actions: React.PropTypes.object
      }
    });

    return ContextWrapper;
  };
}