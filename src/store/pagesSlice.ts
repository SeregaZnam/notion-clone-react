import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PageModel } from "../types/Page.model";
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
  reducers: {
    resolveComment: (state, action: PayloadAction<{ pageId: string; commentId: string }>) => {
      return {
        ...state,
        pages: state.pages.map((page) => {
          if (page.id === action.payload.pageId) {
            return {
              ...page,
            };
          }

          return page;
        }),
      };
    },
    removeComment: (state, action: PayloadAction<{ pageId: string; commentId: string }>) => {
      return {
        ...state,
        pages: state.pages.map((page) => {
          if (page.id === action.payload.pageId) {
            return {
              ...page,
            };
          }

          return page;
        }),
      };
    },
    changeComment: (state, action) => {},
    addPageIcon: (state, action: PayloadAction<{ pageId: string; srcIcon: string }>) => {
      return {
        ...state,
        pages: state.pages.map((page) => {
          if (page.id === action.payload.pageId) {
            return {
              ...page,
              srcIcon: action.payload.srcIcon,
            };
          }
          return page;
        }),
      };
    },
  },
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

export const { resolveComment, removeComment, addPageIcon, changeComment } = pagesSlice.actions;
export const pagesReducer = pagesSlice.reducer;
