import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      id: 1,
      name: 'Food',
    },
    {
      id: 2,
      name: 'Transport',
    },
    {
      id: 3,
      name: 'Shopping',
    },
    {
      id: 4,
      name: 'Entertainment',
    },
    {
      id: 5,
      name: 'Health',
    },
    {
      id: 6,
      name: 'Bills',
    },
    {
      id: 7,
      name: 'Education',
    },
    {
      id: 8,
      name: 'Others',
    },
    {
      id: 9,
      name: 'Travel',
    },
    {
      id: 10,
      name: 'Home',
    },
    {
      id: 11,
      name: 'Personal Care',
    },
    {
      id: 12,
      name: 'Gifts & Donations',
    },
  ],
  selectedCategoryId: undefined,
};

const CategoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    updateSelectedCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload;
      return state;
    },
    resetCategories: () => initialState,
    resetToInitialState: () => initialState,
  },
});

export const {updateSelectedCategoryId, resetCategories, resetToInitialState} =
  CategoriesSlice.actions;

export default CategoriesSlice.reducer;
