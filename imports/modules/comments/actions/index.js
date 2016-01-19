import comments from './comments';

// Here, we can automatically generate this file based on the actions inside
// this directory.
const actions = {
  comments
};

// Here, we can move this logic into a utility library
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
