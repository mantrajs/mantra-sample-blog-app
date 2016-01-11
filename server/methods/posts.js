import {Posts} from '/libs/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.methods({
  'posts.create'(_id, title, content) {
    check(_id, String);
    check(title, String);
    check(content, String);

    // Show the latency compensations
    Meteor._sleepForMs(500);

    // XXX: Do some user authorization
    const createdAt = new Date();
    const post = {_id, title, content, createdAt};
    Posts.insert(post);
  }
});
