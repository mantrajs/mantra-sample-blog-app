const {withContext} = require('../libs/react-app-context.jsx');
const Version = require('../components/version/index.jsx');

export const contextBindFn = ({Meteor}) => ({
  version: Meteor.status().status
});
const VersionComponent = withContext(contextBindFn)(Version);

export default VersionComponent;
