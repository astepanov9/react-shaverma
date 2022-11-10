import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export enum SortPropertyEnum {
  RATING_DESC = 'rating',
  RATING_ASC = '-rating',
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
  TITLE_ASC = 'title',
  TITLE_DESC = '-title',
}

export type Sort = {
  name: string;
  property: SortPropertyEnum;
};

export type SetFiltersState = {
  categoryId: number;
  sortList: SortPropertyEnum;
  currentPage: number;
};

interface filterSliceState {
  searchValue: string;
  categoryId: number;
  sortList: Sort;
  currentPage: number;
}

const initialState: filterSliceState = {
  searchValue: '',
  categoryId: 0,
  sortList: {
    name: 'популярности ↑',
    property: SortPropertyEnum.RATING_ASC,
  },
  currentPage: 1,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sortList = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<SetFiltersState>) {
      state.currentPage = Number(action.payload.currentPage);
      state.sortList.property = action.payload.sortList;
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const selectedSort = (state: RootState) => state.filterSlice.sortList;

export const { setCategoryId, setSort, setCurrentPage, setFilters, setSearchValue } =
  filterSlice.actions;
export default filterSlice.reducer;
