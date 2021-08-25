import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import rootReducer from './slices';

import throttle from 'lodash.throttle';

import { saveState, loadState } from '../localStorage/localStorage';

// By providing a preloaded state (loaded from local storage), we can persist
// the state across the user's visits to the web app.

const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(),
});

// We'll subscribe to state changes, saving the store's state to the browser's
// local storage. We'll throttle this to prevent excessive work.
store.subscribe(
	throttle( () => saveState(store.getState()), 1000)
);

export default store;
