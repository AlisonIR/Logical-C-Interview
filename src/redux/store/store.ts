import { configureStore } from '@reduxjs/toolkit';
import { dataApi } from '../../services/api'; 


const store = configureStore({
  reducer: {
    [dataApi.reducerPath]: dataApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware), 
});

export default store;


  