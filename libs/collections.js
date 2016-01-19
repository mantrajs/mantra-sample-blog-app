import {Mongo} from 'meteor/mongo';

export default {
  Posts: new Mongo.Collection('posts'),
  Comments: new Mongo.Collection('comments')
};
