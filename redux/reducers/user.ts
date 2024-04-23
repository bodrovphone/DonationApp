import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  firstName: 'Alex',
  lastName: 'Bodrov',
  userId: 1,
};

const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
  },
});

export const {updateFirstName} = User.actions;
export default User;
