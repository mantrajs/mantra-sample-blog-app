import comments from './comments';

const actions = {
  comments
};

export const bindToContext = context => {
  for (let actionType in actions) {
    if (!actions.hasOwnProperty(actionType)) {
      continue;
    }

    const actionMap = actions[actionType];
    const newActionMap = {};
    for (let actionName in actionMap) {
      if (!actionMap.hasOwnProperty(actionName)) {
        continue;
      }

      const action = actionMap[actionName];
      newActionMap[actionName] = action.bind(null, context);
    }

    actions[actionType] = newActionMap;
  }
};

export default actions;
