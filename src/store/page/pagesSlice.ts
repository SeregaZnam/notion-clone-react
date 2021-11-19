import { createSlice } from "@reduxjs/toolkit";
import { PageModel } from "../../types/Page.model";
import { fetchAddPage, fetchChangePage, fetchPages } from "./pageSliceThunks";

interface PagesState {
  pages: PageModel[];
}

const initialState: PagesState = {
  pages: [],
};

export const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPages.fulfilled, (state, action) => {
      state.pages = [...state.pages, ...action.payload];
    });

    builder.addCase(fetchAddPage.fulfilled, (state, action) => {
      state.pages = [...state.pages, action.payload];
    });

    builder.addCase(fetchChangePage.fulfilled, (state, action) => {
      state.pages = state.pages.map((page) =>
        page.id === action.payload.id ? action.payload : page,
      );
    });
  },
});

export const pagesReducer = pagesSlice.reducer;
