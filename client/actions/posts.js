export default {
  create({Meteor, LocalState}, title, content) {
    if (!title || !content) {
      return LocalState.set('SAVING_ERROR', 'Title & Content are required!');
    }

    LocalState.set('SAVING_ERROR', null);
    LocalState.set('SAVING_NEW_POST', true);

    const id = Random.id();
    Meteor.call('posts.create', id, title, content, (err) => {
      LocalState.set('SAVING_NEW_POST', false);
      if (err) {
        return alert(err.message);
      }
      FlowRouter.go(`/post/${id}`);
    });
  },

  clearErrors() {
    return LocalState.set('SAVING_ERROR', null);
  }
};
