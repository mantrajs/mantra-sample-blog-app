const {describe, it} = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import actions from '../comments';

describe('comments.actions.comments', () => {
  describe('create', () => {
    it('should reject if text is not there', () => {
      const LocalState = {set: spy()};
      actions.create({LocalState}, 'postId', null);
      const args = LocalState.set.args[0];

      expect(args[0]).to.be.equal('CREATE_COMMENT_ERROR');
      expect(args[1]).to.match(/required/);
    });

    it('should reject if postId is not there', () => {
      const LocalState = {set: spy()};
      actions.create({LocalState}, null, 'text');
      const args = LocalState.set.args[0];

      expect(args[0]).to.be.equal('CREATE_COMMENT_ERROR');
      expect(args[1]).to.match(/required/);
    });

    it('should clear older LocalState for CREATE_COMMENT_ERROR', () => {
      const Meteor = {uuid: spy(), call: spy()};
      const LocalState = {set: spy()};
      const FlowRouter = {go: spy()};

      actions.create({LocalState, Meteor, FlowRouter}, 'postId', 'text');
      expect(LocalState.set.args[0]).to.deep.equal([ 'CREATE_COMMENT_ERROR', null ]);
    });

    it('should call Meteor.call to save the comment', () => {
      const Meteor = {uuid: () => 'id', call: spy()};
      const LocalState = {set: spy()};
      const FlowRouter = {go: spy()};

      actions.create({LocalState, Meteor, FlowRouter}, 'postId', 'text');
      const methodArgs = Meteor.call.args[0];

      expect(methodArgs.slice(0, 4)).to.deep.equal([
        'posts.createComment', 'id', 'postId', 'text'
      ]);
      expect(methodArgs[4]).to.be.a('function');
    });

    describe('after Meteor.call', () => {
      describe('if there is error', () => {
        it('should set CREATE_COMMENT_ERROR with the error message', () => {
          const Meteor = {uuid: () => 'id', call: stub()};
          const LocalState = {set: spy()};
          const FlowRouter = {go: spy()};
          const err = {message: 'Oops'};
          Meteor.call.callsArgWith(4, err);

          actions.create({Meteor, LocalState, FlowRouter}, 'postId', 'text');
          expect(LocalState.set.args[1]).to.deep.equal([ 'CREATE_COMMENT_ERROR', err.message ]);
        });
      });
    });
  });

  describe('clearErrors', () => {
    it('should clear CREATE_COMMENT_ERROR local state', () => {
      const LocalState = {set: spy()};
      actions.clearErrors({LocalState});
      expect(LocalState.set.callCount).to.be.equal(1);
      expect(LocalState.set.args[0]).to.deep.equal([ 'CREATE_COMMENT_ERROR', null ]);
    });
  });
});
