import { configureStore } from '@reduxjs/toolkit';
import { dataApi } from '../../services/api'; // Asegúrate de que la ruta del módulo sea correcta


const store = configureStore({
  reducer: {
    [dataApi.reducerPath]: dataApi.reducer, // Agrega el reducer de la API a tu tienda
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware), // Agrega el middleware de la API a tu tienda
});

export default store;


  