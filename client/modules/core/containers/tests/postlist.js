const { describe, it } = global;
import {expect} from 'chai';
import {stub, spy} from 'sinon';
import {composer} from '../postlist';

describe('core.containers.postlist', () => {
  describe('composer', () => {
    it('should subscribe to posts.list', () => {
      const Meteor = {subscribe: stub()};
      Meteor.subscribe.returns({ready: () => false});

      const context = () => ({Meteor});
      const onData = spy();

      composer({context}, onData);
      expect(Meteor.subscribe.args[0]).to.deep.equal([
        'posts.list'
      ]);
    });

    describe('after subscribed', () => {
      it('should fetch data from all posts & pass to onData', () => {
        const Meteor = {subscribe: stub()};
        Meteor.subscribe.returns({ready: () => true});

        const posts = [ {_id: 'aa'} ];
        const Collections = {Posts: {find: stub()}};
        Collections.Posts.find.returns({fetch: () => posts});

        const context = () => ({Meteor, Collections});
        const onData = spy();

        composer({context}, onData);
        expect(onData.args[0]).to.deep.equal([ null, {posts} ]);
      });
    });
  });
});
