export default {
  create({Meteor, LocalState, FlowRouter}, title, content) {
    if (!title || !content) {
      return LocalState.set('SAVING_ERROR', 'Title & Content are required!');
    }

    LocalState.set('SAVING_ERROR', null);
    LocalState.set('SAVING_NEW_POST', true);

    const id = Meteor.uuid();
    Meteor.call('posts.create', id, title, content, (err) => {
      LocalState.set('SAVING_NEW_POST', false);
      if (err) {
        return LocalState.set('SAVING_ERROR', err.message);
      }
      FlowRouter.go(`/post/${id}`);
    });
  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};
