export default {
  create({Meteor, LocalState}, postId, text) {
    LocalState.set('CREATE_COMMENT_ERROR', null);
    if (!text) {
      LocalState.set('CREATE_COMMENT_ERROR', 'Comment text is required.');
      return;
    }

    const id = Meteor.uuid();
    Meteor.call('posts.createComment', id, postId, text, (err) => {
      if (err) {
        alert(`Post creating failed: ${err.message}`);
      }
    });
  },

  clearErrors({LocalState}) {
    return LocalState.set('CREATE_COMMENT_ERROR', null);
  }
};
