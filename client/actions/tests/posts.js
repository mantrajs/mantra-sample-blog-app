import {describe, it} from 'mocha';
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import actions from '../posts';

describe('actions.posts', () => {
  describe('create', () => {
    it('should reject if title is not there', () => {
      const LocalState = {set: spy()};
      actions.create({LocalState}, null, 'content');
      const args = LocalState.set.args[0];

      expect(args[0]).to.be.equal('SAVING_ERROR');
      expect(args[1]).to.match(/required/);
    });

    it('should reject if content is not there', () => {
      const LocalState = {set: spy()};
      actions.create({LocalState}, null, 'content');
      const args = LocalState.set.args[0];

      expect(args[0]).to.be.equal('SAVING_ERROR');
      expect(args[1]).to.match(/required/);
    });

    it('should clear older LocalState for SAVING_ERROR', () => {
      const Meteor = {uuid: spy(), call: spy()};
      const LocalState = {set: spy()};

      actions.create({LocalState, Meteor}, 't', 'c');
      expect(LocalState.set.args[0]).to.deep.equal(['SAVING_ERROR', null]);
    });

    it('should set LocalState SAVING_NEW_POST to true', () => {
      const Meteor = {uuid: spy(), call: spy()};
      const LocalState = {set: spy()};

      actions.create({LocalState, Meteor}, 't', 'c');
      expect(LocalState.set.args[1]).to.deep.equal(['SAVING_NEW_POST', true]);
    });

    it('should call Meteor.call to save the post', () => {
      const Meteor = {uuid: () => 'id', call: spy()};
      const LocalState = {set: spy()};

      actions.create({LocalState, Meteor}, 't', 'c');
      const methodArgs = Meteor.call.args[0];
      
      expect(methodArgs.slice(0, 4)).to.deep.equal([
        'posts.create', 'id', 't', 'c'
      ]);
      expect(methodArgs[4]).to.be.a('function');
    });
    
    describe('after Meteor.call', () => {
      it('should set SAVING_NEW_POST to false', () => {
        const Meteor = {uuid: () => 'id', call: stub()};
        const LocalState = {set: spy()};
        const FlowRouter = {go: spy()};
        Meteor.call.callsArg(4);

        actions.create({Meteor, LocalState, FlowRouter}, 't', 'c');
        expect(LocalState.set.args[2]).to.deep.equal(['SAVING_NEW_POST', false]);
      });

      describe('if there is error', () => {
        it('should set SAVING_ERROR with the error message', () => {
          const Meteor = {uuid: () => 'id', call: stub()};
          const LocalState = {set: spy()};
          const FlowRouter = {go: spy()};
          const err = {message: 'Oops'};
          Meteor.call.callsArgWith(4, err);

          actions.create({Meteor, LocalState, FlowRouter}, 't', 'c');
          expect(LocalState.set.args[3]).to.deep.equal(['SAVING_ERROR', err.message]);
        });
      });

      describe('if it success', () => {
        it('should redirect user to the post', () => {
          const id = 'dsds';
          const Meteor = {uuid: () => id, call: stub()};
          const LocalState = {set: spy()};
          const FlowRouter = {go: spy()};
          Meteor.call.callsArg(4);

          actions.create({Meteor, LocalState, FlowRouter}, 't', 'c');
          expect(FlowRouter.go.args[0][0]).to.be.equal(`/post/${id}`);
        });
      });
    });
  });

  describe('clearErrors', () => {
    it('should clear SAVING_ERROR local state', () => {
      const LocalState = {set: spy()};
      actions.clearErrors({LocalState});
      expect(LocalState.set.callCount).to.be.equal(1);
      expect(LocalState.set.args[0]).to.deep.equal(['SAVING_ERROR', null]);
    });
  });
});