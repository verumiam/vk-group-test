import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/react';

import { initialStateType } from '../config/filter-panel.types';

const initialState: initialStateType = {
  colors: {},
  friends: false,
  filtersCount: 0,
  isModalOpen: false,
};

const filterPanel = createSlice({
  name: 'filterPanel',
  initialState,
  reducers: {
    setFriends: (state, action: PayloadAction<initialStateType['friends']>) => {
      state.friends = action.payload;
    },
    setFilterColors: (state, action: PayloadAction<{ value: string; checked: boolean }>) => {
      const { value, checked } = action.payload;
      state.colors[value] = {
        ...state.colors[value],
        checked,
      };
    },
    toggleModalOpen: (state) => {
      state.isModalOpen = !state.isModalOpen;
      if (!state.isModalOpen) {
        Object.values(state.colors).forEach((color) => {
          if (!color.apply) {
            color.checked = false;
          } else {
            color.checked = true;
          }
        });
        state.filtersCount = Object.values(state.colors).filter((color) => color.apply).length;
      }
    },
    onApplyFilters: (state) => {
      let count = 0;
      Object.values(state.colors).forEach((color) => {
        color.apply = color.checked;
        if (color.apply) {
          count++;
        }
      });
      state.filtersCount = count;
      state.isModalOpen = false;
    },
  },
});

export const { setFriends, setFilterColors, toggleModalOpen, onApplyFilters } = filterPanel.actions;

export default filterPanel.reducer;
