import comments from './comments';

const actions = {
  comments
};

export const bindToContext = context => {
  for (var actionType in actions) {
    const actionMap = actions[actionType];
    const newActionMap = {};
    for (var actionName in actionMap) {
      const action = actionMap[actionName];
      newActionMap[actionName] = action.bind(null, context);
    }

    actions[actionType] = newActionMap;
  }
};

export default actions;
