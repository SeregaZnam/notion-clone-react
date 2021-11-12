import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { PageModel } from "../types/Page.model";

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
    addPage: (state) => {
      const newPage: PageModel = {
        id: uuidv4(),
        title: "",
      };
      return {
        ...state,
        pages: [...state.pages, newPage],
      };
    },
    changeTitle: (state, action: PayloadAction<{ id: string; title: string }>) => {
      return {
        ...state,
        pages: state.pages.map((page) => {
          if (page.id === action.payload.id) {
            return {
              ...page,
              title: action.payload.title,
            };
          }
          return page;
        }),
      };
    },
    addComment: (state, action: PayloadAction<{ pageId: string; text: string }>) => {
      console.log(action);
      return state;
    },
  },
});

export const { addPage, changeTitle, addComment } = pagesSlice.actions;
export const pagesReducer = pagesSlice.reducer;
