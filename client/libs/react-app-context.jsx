// XXX: Move this into a NPM module

export function applyContext(context, _actions) {
  const actions = {};
  for(var key in _actions) {
    const actionMap = _actions[key];
    for(var actionName in actionMap) {
      actionMap[actionName] = actionMap[actionName].bind(null, context);
    }
    actions[key] = actionMap;
  }

  return function(ChildComponent) {
    const Context = React.createClass({
      childContextTypes: {
        context: React.PropTypes.object,
        actions: React.PropTypes.object
      },

      getChildContext() {
        return {
          context,
          actions
        }
      },

      render() {
        return (<ChildComponent {...this.props} />)
      }
    });

    return Context;
  }
}

const defaultMapper = (context, actions) => ({
  context: () => context,
  actions: () => actions
});

export function withContext(mapper = defaultMapper) {
  return function(ChildComponent) {
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
  }
}

export function composeAll(...composers) {
  return function(BaseComponent) {
    let finalComponent = BaseComponent;
    composers.forEach(composer => {
      finalComponent = composer(finalComponent);
    });

    return finalComponent;
  }
}
