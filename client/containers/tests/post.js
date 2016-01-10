import {describe, it} from 'mocha';
import {expect} from 'chai';
import {stub, spy} from 'sinon';
import {composer} from '../post';

describe('containers.post', () => {
  describe('composer', () => {
    it('should subscribe to the given postId via prop', () => {
      const Meteor = {subscribe: stub()};
      Meteor.subscribe.returns({ready: () => false});

      const context = () => ({Meteor});
      const postId = 'dwd';
      const onData = spy();

      composer({context, postId}, onData);
      expect(Meteor.subscribe.args[0]).to.deep.equal([
        'posts.single', postId
      ]);
    });

    describe('while subscribing', () => {
      it('should call just onData()', () => {
        const Meteor = {subscribe: stub()};
        Meteor.subscribe.returns({ready: () => false});

        const context = () => ({Meteor});
        const postId = 'dwd';
        const onData = spy();

        composer({context, postId}, onData);
        expect(onData.args[0]).to.deep.equal([]);
      });
    });

    describe('after subscribed', () => {
      it('should find the post and send it to onData', () => {
        const Meteor = {subscribe: stub()};
        Meteor.subscribe.returns({ready: () => true});

        const Collections = {
          Posts: {findOne: stub()}
        };
        const post = {_id: 'post'};
        Collections.Posts.findOne.returns(post);

        const context = () => ({Meteor, Collections});
        const postId = 'dwd';
        const onData = spy();

        composer({context, postId}, onData);
        expect(onData.args[0]).to.deep.equal([ null, {post} ]);
      });
    });
  });
});
