import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/react';

import { initialStateType } from '../config/filter-tab.types';

const initialState: initialStateType = {
  tab: 'all',
};

const filterTab = createSlice({
  name: 'filterTab',
  initialState,
  reducers: {
    setFilterTab: (state, action: PayloadAction<initialStateType['tab']>) => {
      state.tab = action.payload;
    },
  },
});

export const { setFilterTab } = filterTab.actions;

export default filterTab.reducer;
