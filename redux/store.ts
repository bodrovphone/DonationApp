import {combineReducers, configureStore} from '@reduxjs/toolkit';
import User from './reducers/user';

const rootReducer = combineReducers({
  user: User.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
