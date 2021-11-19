import { createSlice } from "@reduxjs/toolkit";
import { CommentModel } from "../../types/Comment.model";
import {
  fetchChangeComment,
  fetchComments,
  fetchRemoveComment,
  fetchAddComment,
} from "./commentsSliceThunks";

interface CommentState {
  comments: CommentModel[];
}

const initialState: CommentState = {
  comments: [],
};

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    });

    builder.addCase(fetchAddComment.fulfilled, (state, action) => {
      state.comments = [...state.comments, action.payload];
    });

    builder.addCase(fetchRemoveComment.fulfilled, (state, action) => {
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.meta.arg.id,
      );
    });

    builder.addCase(fetchChangeComment.fulfilled, (state, action) => {
      state.comments = state.comments.map((comment) =>
        comment.id === action.payload.id ? action.payload : comment,
      );
    });
  },
});

export const commentsReducer = commentSlice.reducer;
