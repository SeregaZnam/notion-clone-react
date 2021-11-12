import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

interface PageModel {
  id: string;
  title: string;
}

interface PagesState {
  pages: PageModel[];
}

const initialState: PagesState = {
  pages: [],
};

export const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    addPage: (state) => {
      const newPage: PageModel = {
        id: uuidv4(),
        title: '',
      };
      return {
        ...state,
        pages: [
          ...state.pages,
          newPage,
        ],
      };
    },
    changeTitle: (state, action: PayloadAction<{ index: number; title: string }>) => {
      return {
        ...state,
        pages: state.pages.map((page, index) => {
          if (index === action.payload.index) {
            return {
              ...page,
              title: action.payload.title,
            };
          }
          return page;
        }),
      };
    },
  },
});

export const { addPage, changeTitle } = pagesSlice.actions;
export const pagesReducer = pagesSlice.reducer;
