const { describe, it } = global;
// import {expect} from 'chai';
// import {stub, spy} from 'sinon';
// import {composer, depsMapper} from '../create_comment';

describe('comments.containers.create_comment', () => {
  describe('composer', () => {
    it('should get CREATE_COMMENT_ERROR from local state');
  });

  describe('depsMapper', () => {
    describe('actions', () => {
      it('should map comments.create');
      it('should map comments.clearErrors');
    });
    describe('context', () => {
      it('should map the whole context as a function');
    });
  });
});
