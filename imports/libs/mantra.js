import {
  injectDeps,
  useDeps as _useDeps
} from 'react-simple-di';

import {
  compose as _compose,
  composeWithTracker as _composeWithTracker,
  composeWithPromise as _composeWithPromise,
  composeWithObservable as _composeWithObservable,
  composeAll as _composeAll
} from 'react-komposer';

class App {
  constructor(context, actions = {}) {
    this.context = context;
    this.actions = actions;
    this._routesLoaded = false;
  }

  loadRoutes(routes) {
    const inject = (comp) => {
      return injectDeps(this.context, this.actions)(comp);
    };

    routes(inject, this.context, this.actions);
    this._routesLoaded = true;
  }

  loadModule(module) {
    if (this._routesLoaded) {
      const message = `A module should be loaded before loading routes.`;
      throw new Error(message);
    }

    if (!module) {
      const message = `app.loadModule() should be called with a module`;
      throw new Error(message);
    }

    if (typeof module.load !== 'function') {
      const message = `A module must contain a .load() function.`;
      throw new Error(message);
    }

    const actions = module.actions || {};
    this.actions = {
      ...this.actions,
      ...actions
    };

    module.load(this.context);
  }
}

// export this module's functions
export const createApp = (...args) => (new App(...args));

// export react-simple-di functions
export const useDeps = _useDeps;

// export react-komposer functions
export const compose = _compose;
export const composeWithTracker = _composeWithTracker;
export const composeWithPromise = _composeWithPromise;
export const composeWithObservable = _composeWithObservable;
export const composeAll = _composeAll;
