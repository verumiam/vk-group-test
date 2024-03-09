import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { GetGroupsResponse } from '../config/groups.types';
import { fetchGroups } from './fetch-groups';

export const groupsApi = createApi({
  reducerPath: 'groupsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getGroups: builder.query<GetGroupsResponse, void>({
      queryFn: async () => {
        const result = await fetchGroups();
        return { data: result };
      },
    }),
  }),
});

export const { useGetGroupsQuery } = groupsApi;
