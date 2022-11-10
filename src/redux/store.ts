import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slice/filterSlice';
import cartSlice from './slice/cartSlice';
import shavermaSlice from './slice/shavermaSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filterSlice,
    cartSlice,
    shavermaSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
