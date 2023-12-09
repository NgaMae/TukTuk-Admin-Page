// store.js
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/es/storage/session';

const initialState = {
  isBooleanTrue: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_BOOLEAN':
      return { ...state, isBooleanTrue: true };
    default:
      return state;
  }
};

const persistConfig = {
  key: 'root',
  storage:sessionStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
