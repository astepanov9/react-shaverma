import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { Sort } from './filterSlice';

export type FetchShavermaParams = {
  page: string;
  limit: string;
  category: string;
  sortBy: Sort;
  order: string;
};

export const fetchShavermas = createAsyncThunk(
  'shaverma/fetchShavermaStatus',
  async (params: FetchShavermaParams) => {
    const { page, limit, category, sortBy, order } = params;
    const url = `https://632864fba2e90dab7bdf12d2.mockapi.io/items?page=${page}&limit=${limit}&category=${category}&sortBy=${sortBy}&order=${order}`;
    const { data } = await axios.get(url);

    return data as ShavermaItems[];
  }
);

type ShavermaItems = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: string[];
  types: string[];
};

interface ShavermaSliceState {
  items: ShavermaItems[];
  status: 'loading' | 'success' | 'error';
}

const initialState: ShavermaSliceState = {
  items: [],
  status: 'loading',
};

const shavermaSlice = createSlice({
  name: 'shaverma',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<ShavermaItems[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchShavermas.pending, (state) => {
      state.items = [];
      state.status = 'loading';
    });
    builder.addCase(fetchShavermas.fulfilled, (state, action: PayloadAction<ShavermaItems[]>) => {
      state.items = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchShavermas.rejected, (state) => {
      state.items = [];
      state.status = 'error';
    });
  },
});

export const selectedItem = (state: RootState) => state.shavermaSlice;

export const { setItems } = shavermaSlice.actions;
export default shavermaSlice.reducer;
