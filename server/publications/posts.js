import {Posts} from '/libs/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish('posts.list', function () {
  const selector = {};
  const options = {
    fields: {_id: 1, title: 1},
    sort: {createdAt: -1},
    limit: 10
  };

  return Posts.find(selector, options);
});

Meteor.publish('posts.single', function (postId) {
  check(postId, String);
  const selector = {_id: postId};
  return Posts.find(selector);
});
