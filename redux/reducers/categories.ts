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
  },
});

export const {updateSelectedCategoryId, resetCategories} =
  CategoriesSlice.actions;

export default CategoriesSlice.reducer;
