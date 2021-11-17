import { createSlice } from "@reduxjs/toolkit";
import { CommentModel } from "../types/Comment.model";
import {
  fetchResolveChangePageComment,
  fetchPageComments,
  fetchRemovePageComment,
  fetchAddPageComment,
} from "./pagesCommentsThunks";

interface PagesCommentsState {
  pagesComments: CommentModel[];
}

const initialState: PagesCommentsState = {
  pagesComments: [],
};

export const pagesCommentsSlice = createSlice({
  name: "pagesComments",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPageComments.fulfilled, (state, action) => {
      state.pagesComments = action.payload;
    });

    builder.addCase(fetchAddPageComment.fulfilled, (state, action) => {
      state.pagesComments = [...state.pagesComments, action.payload];
    });

    builder.addCase(fetchRemovePageComment.fulfilled, (state, action) => {
      state.pagesComments = state.pagesComments.filter(
        (comment) => comment.id !== action.meta.arg.id,
      );
    });

    builder.addCase(fetchResolveChangePageComment.fulfilled, (state, action) => {
      state.pagesComments = state.pagesComments.map((comment) =>
        comment.id === action.payload.id ? action.payload : comment,
      );
    });
  },
});

export const pagesCommentsReducer = pagesCommentsSlice.reducer;
