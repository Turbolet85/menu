import { combineReducers } from '@reduxjs/toolkit';

import { categoriesSlice } from '../features/categories/categoriesSlice';
import { menuSlice } from '../features/menu/menuSlice';

const rootReducer = combineReducers({
  menu: menuSlice.reducer,
  categories: categoriesSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
