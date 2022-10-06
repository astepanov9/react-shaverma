import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sortList: {
    name: "популярности ↑",
    property: "-rating",
  },
  currentPage: 1,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sortList = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setCategoryId, setSort, setCurrentPage } = filterSlice.actions;
export default filterSlice.reducer;
