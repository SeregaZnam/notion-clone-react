import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { PageModel } from "../types/Page.model";
import { CommentModel } from "../types/Comment.model";

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
        srcIcon: "",
        comments: [],
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
    addComment: (
      state,
      action: PayloadAction<{ pageId: string; text: string; imageBlob?: Blob | null }>,
    ) => {
      const newComment: CommentModel = {
        id: uuidv4(),
        pageId: action.payload.pageId,
        text: action.payload.text,
        date: Date.now(),
        resolved: false,
        imageBlob: action.payload.imageBlob || null,
      };

      return {
        ...state,
        pages: state.pages.map((page) => {
          if (page.id === action.payload.pageId) {
            return {
              ...page,
              comments: [...page.comments, newComment],
            };
          }

          return page;
        }),
      };
    },
    resolveComment: (state, action: PayloadAction<{ pageId: string; commentId: string }>) => {
      return {
        ...state,
        pages: state.pages.map((page) => {
          if (page.id === action.payload.pageId) {
            return {
              ...page,
              comments: page.comments.map((comment) => {
                if (comment.id === action.payload.commentId) {
                  return {
                    ...comment,
                    resolved: true,
                  };
                }
                return comment;
              }),
            };
          }

          return page;
        }),
      };
    },
    reopenComment: (state, action: PayloadAction<{ pageId: string; commentId: string }>) => {
      return {
        ...state,
        pages: state.pages.map((page) => {
          if (page.id === action.payload.pageId) {
            return {
              ...page,
              comments: page.comments.map((comment) => {
                if (comment.id === action.payload.commentId) {
                  return {
                    ...comment,
                    resolved: false,
                  };
                }
                return comment;
              }),
            };
          }

          return page;
        }),
      };
    },
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
});

export const { addPage, changeTitle, addComment, resolveComment, reopenComment, addPageIcon } =
  pagesSlice.actions;
export const pagesReducer = pagesSlice.reducer;
