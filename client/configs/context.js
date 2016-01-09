import Collections from '/libs/collections';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactiveDict} from 'meteor/reactive-dict';

export default {
  Meteor,
  FlowRouter,
  Collections,
  LocalState: new ReactiveDict(),
};
