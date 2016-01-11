import {Posts} from '/libs/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'posts.create'(_id, title, content) {
      check(_id, String);
      check(title, String);
      check(content, String);

      const createdAt = new Date();
      const post = {
        _id, title, content, createdAt,
        saving: true
      };
      Posts.insert(post);
    }
  });
}
