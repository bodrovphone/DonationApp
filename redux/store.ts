import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {logger} from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';

import categories from './reducers/categories';
import user from './reducers/user';

const rootReducer = combineReducers({
  user,
  categories,
});

const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

const persistedReducer = persistReducer(configuration, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export default store;
export const persistor = persistStore(store);
