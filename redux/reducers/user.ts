import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  firstName: 'Alex',
  lastName: 'Bodrov',
  userId: 1,
  profilePictureUri: 'https://avatars.githubusercontent.com/u/18177886?v=4',
};

const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
    resetToInitialState: () => initialState,
  },
});

export const {updateFirstName, resetToInitialState} = User.actions;
export default User.reducer;
