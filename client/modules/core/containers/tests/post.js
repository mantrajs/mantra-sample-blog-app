const { describe, it } = global;
import {expect} from 'chai';
import {stub, spy} from 'sinon';
import {composer} from '../post';

describe('containers.post', () => {
  describe('composer', () => {
    const Tracker = {nonreactive: cb => cb()};
    const getCollections = (post) => {
      const Collections = {
        Posts: {findOne: stub()}
      };
      Collections.Posts.findOne.returns(post);
      return Collections;
    };

    it('should subscribe to the given postId via prop', () => {
      const Meteor = {subscribe: stub()};
      Meteor.subscribe.returns({ready: () => false});
      const Collections = getCollections();

      const context = () => ({Meteor, Tracker, Collections});
      const postId = 'dwd';
      const onData = spy();

      composer({context, postId}, onData);
      const args = Meteor.subscribe.args[0];
      expect(args.slice(0, 2)).to.deep.equal([
        'posts.single', postId
      ]);
    });

    describe('while subscribing', () => {
      it('should call just onData()', () => {
        const Meteor = {subscribe: stub()};
        const Collections = getCollections();

        const context = () => ({Meteor, Tracker, Collections});
        const postId = 'dwd';
        const onData = spy();

        composer({context, postId}, onData);
        expect(onData.args[0]).to.deep.equal([]);
      });
    });

    describe('after subscribed', () => {
      it('should find the post and send it to onData', () => {
        const Meteor = {subscribe: stub()};

        const post = {_id: 'post'};
        const Collections = getCollections(post);

        const context = () => ({Meteor, Collections, Tracker});
        const postId = 'dwd';
        const onData = spy();

        composer({context, postId}, onData);
        expect(onData.args[0]).to.deep.equal([ null, {post} ]);
      });
    });
  });
});
