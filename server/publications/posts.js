import {Posts} from '/app/libs/collections';

Meteor.publish('posts.list', () => {
  const selector = {};
  const options = {
    fields: {_id: 1, title: 1},
    sort: {createdAt: -1},
    limit: 10
  };

  return Posts.find(selector, options);
});

Meteor.publish('posts.single', (postId) => {
  check(postId, String);
  const selector = {_id: postId};
  return Posts.find(selector);
});
