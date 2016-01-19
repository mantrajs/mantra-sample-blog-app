export default function ({Collections, Meteor}) {
  Meteor.methods({
    'posts.createComment'(_id, postId, text) {
      const saving = true;
      const createdAt = new Date();
      const author = 'Me';
      Collections.Comments.insert({
        _id, postId, text, saving, createdAt, author
      });
    }
  });
}
