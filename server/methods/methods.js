import {Posts} from '/app/libs/collections';

Meteor.methods({
  'posts.create': (_id, title, content) => {
    check(_id, String);
    check(title, String);
    check(content, String);

    Meteor._sleepForMs(2000);

    // XXX: Do some user authorization
    const createdAt = new Date();
    const post = {_id, title, content, createdAt};
    Posts.insert(post);
  }
});
