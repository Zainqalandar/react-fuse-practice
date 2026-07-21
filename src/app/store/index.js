import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import createReducer from './rootReducer';

const middlewares = [];

if (import.meta.env.DEV) {
  const logger = createLogger({ collapsed: (getState, action, logEntry) => !logEntry.error });

  middlewares.push(logger);
}

const store = configureStore({
  reducer: createReducer(),
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(middlewares),
  devTools: import.meta.env.DEV,
});

store.asyncReducers = {};

if (import.meta.hot) {
  import.meta.hot.accept('./rootReducer', (newModule) => {
    store.replaceReducer(newModule.default(store.asyncReducers));
  });
}

export const injectReducer = (key, reducer) => {
  if (store.asyncReducers[key]) {
    return false;
  }
  store.asyncReducers[key] = reducer;
  store.replaceReducer(createReducer(store.asyncReducers));
  return store;
};

export default store;
