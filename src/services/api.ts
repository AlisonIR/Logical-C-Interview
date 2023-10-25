import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Data } from '../types/types'; // Asegúrate de que la ruta sea correcta

export const dataApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://randomuser.me/api' }),
  endpoints: (builder) => ({
    fetchData: builder.query<Data[], void>({ 
      query: () => 'results',
      transformResponse: (response: { results: Data[] }) => response.results,
    }),
  }),
});

export const { useFetchDataQuery } = dataApi;





