const { describe, it } = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import {composer, depsMapper} from '../newpost';

describe('core.containers.newpost', () => {
  describe('composer', () => {
    it('should get SAVING_ERROR from local state', () => {
      const LocalState = {get: spy()};
      const context = () => ({LocalState});

      composer({context}, spy());

      const args = LocalState.get.args[0];
      expect(args).to.have.length(1);
      expect(args[0]).to.be.equal('SAVING_ERROR');
    });

    it('should call onData with null and {error}', () => {
      const LocalState = {get: stub().returns('error')};
      const context = () => ({LocalState});
      const onData = spy();

      composer({context}, onData);

      const args = onData.args[0];

      expect(args[0]).to.be.equal(null);
      expect(args[1]).to.be.deep.equal({error: 'error'});
    });

    it('should return clearErrors', () => {
      const LocalState = {get: spy()};
      const context = () => ({LocalState});
      const clearErrors = spy();

      const clearFunc = composer({context, clearErrors}, spy());

      expect(clearFunc).to.be.equal(clearErrors);
    });

    it('should get SAVING_NEW_POST from local state');
  });

  describe('depsMapper', () => {
    describe('actions', () => {
      it('should map posts.create', () => {
        const actions = {posts: {create: spy()}};

        const deps = depsMapper({}, actions);

        expect(deps.create).to.be.equal(actions.posts.create);
      });

      it('should map posts.clearErrors', () => {
        const actions = {posts: {clearErrors: spy()}};

        const deps = depsMapper({}, actions);

        expect(deps.clearErrors).to.be.equal(actions.posts.clearErrors);
      });
    });

    describe('context', () => {
      it('should map the whole context as a function', () => {
        const actions = {posts: {create: spy(), clearErrors: spy()}};
        const context = spy();

        const deps = depsMapper(context, actions);

        expect(deps.context()).to.be.equal(context);
      });
    });
  });
});
