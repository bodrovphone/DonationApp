import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  profilePictureUri: 'https://avatars.githubusercontent.com/u/18177886?v=4',
};

const User = createSlice({
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
  },
});

export const {logIn, resetToInitialState} = User.actions;
export default User.reducer;
