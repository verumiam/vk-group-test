import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { groupsApi } from '@/entities/groups/api/groups-api';
import filterPanelReducer from '@/features/filters/filter-panel/model/filter-panel.slice';
import filterTabReducer from '@/features/filters/filter-tab/model/filter-tab.slice';

const store = configureStore({
  reducer: {
    filterTab: filterTabReducer,
    filterPanel: filterPanelReducer,
    [groupsApi.reducerPath]: groupsApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(groupsApi.middleware, logger),
});

export default store;
