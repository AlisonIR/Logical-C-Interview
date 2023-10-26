import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Data } from '../types/types';

export const dataApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://gateway.e-commander.com/v1/health/' }), 
  endpoints: (builder) => ({
    fetchData: builder.query<Data[], void>({
      query: () => 'persons', 
      transformResponse: (response: { persons: Data[] }) => response.persons, 
    }),
  }),
});

export const { useFetchDataQuery } = dataApi;





