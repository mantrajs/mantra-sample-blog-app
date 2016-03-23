const {describe, it} = global;
import {expect} from 'chai';
import {stub, spy} from 'sinon';
import {composer} from '../post';

describe('core.containers.post', () => {
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

    describe('before subscription ready', () => {
      describe('with latency componsation', () => {
        it('should call onData with data', done => {
          const Meteor = {subscribe: stub()};
          Meteor.subscribe.returns({ready: () => false});
          const post = {aa: 10};
          const Collections = getCollections(post);

          const context = () => ({Meteor, Tracker, Collections});
          const postId = 'dwd';
          const onData = (err, data) => {
            expect(data).to.be.deep.equal({post});
            done();
          };

          composer({context, postId}, onData);
        });
      });

      describe('with no latency componsation', () => {
        it('should call onData without nothing', done => {
          const Meteor = {subscribe: stub()};
          Meteor.subscribe.returns({ready: () => false});
          const Collections = getCollections();

          const context = () => ({Meteor, Tracker, Collections});
          const postId = 'dwd';
          const onData = (err, data) => {
            expect(data).to.be.equal(undefined);
            done();
          };

          composer({context, postId}, onData);
        });
      });
    });

    describe('after subscription is ready', () => {
      it('should call onData with data', done => {
        const Meteor = {subscribe: stub()};
        Meteor.subscribe.returns({ready: () => true});
        const post = {aa: 10};
        const Collections = getCollections(post);

        const context = () => ({Meteor, Tracker, Collections});
        const postId = 'dwd';
        const onData = (err, data) => {
          expect(data).to.be.deep.equal({post});
          done();
        };

        composer({context, postId}, onData);
      });
    });
  });
});
