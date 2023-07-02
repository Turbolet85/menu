import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { allCategories } from '../../app/App';

const initialState: string[] = allCategories;

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<string[]>) => {
      return action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
