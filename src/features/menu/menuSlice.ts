import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import menu from '../../../public/data';

export interface IMenuItem {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

const initialState: IMenuItem[] = menu;

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenu: (state, action: PayloadAction<IMenuItem[]>) => {
      return action.payload;
    },
  },
});

export const { setMenu } = menuSlice.actions;
