import {createSlice} from '@reduxjs/toolkit';
import {User} from '../types';

const initialState: User = {
  isLoggedIn: false,
  profilePictureUri: 'https://avatars.githubusercontent.com/u/18177886?v=4',
};

const UserSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logIn: (state, action) => {
      return {
        ...state,
        isLoggedIn: true,
        ...action.payload,
      };
    },
    resetToInitialState: () => initialState,
    updateToken: (state, action) => {
      return {
        ...state,
        token: action.payload,
      };
    },
  },
});

export const {logIn, resetToInitialState, updateToken} = UserSlice.actions;
export default UserSlice.reducer;
