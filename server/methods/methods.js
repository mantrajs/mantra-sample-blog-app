import {Posts} from '../../libs/collections';

Meteor.methods({
  'posts.create': (id, title, content) => {
    check(id, String);
    check(title, String);
    check(content, String);

    // XXX: Do some user authorization
    const post = {_id, title, content};
    Posts.insert(post);
  }
});
