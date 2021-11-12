import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostModel } from "../types/Post.model";
import {
  fetchAddPost,
  fetchChangePost,
  fetchPosts,
  fetchRemovePost,
} from "./postSliceThunks";

interface PostsState {
  posts: PostModel[];
  status: "idle" | "loading" | "resolved" | "rejected";
  error: string;
}

const initialState: PostsState = {
  posts: [],
  status: "idle",
  error: "",
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    errorLoadPost: (_, action: PayloadAction<{ error: string }>) => {
      throw new Error(action.payload.error);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.status = "loading";
      state.error = "";
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = [...state.posts, ...action.payload];
      state.status = "resolved";
      state.error = "";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload as string;
    });

    builder.addCase(fetchAddPost.pending, (state, action) => {
      state.status = "loading";
      state.error = "";
    });
    builder.addCase(fetchAddPost.fulfilled, (state, action) => {
      state.posts = [...state.posts, action.payload];
      state.status = "resolved";
      state.error = "";
    });
    builder.addCase(fetchAddPost.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload as string;
    });

    builder.addCase(fetchChangePost.pending, (state, action) => {
      state.status = "loading";
      state.error = "";
    });
    builder.addCase(fetchChangePost.fulfilled, (state, action) => {
      state.posts = state.posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
      state.status = "resolved";
      state.error = "";
    });
    builder.addCase(fetchChangePost.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload as string;
    });

    builder.addCase(fetchRemovePost.pending, (state, action) => {
      state.status = "loading";
      state.error = "";
    });
    builder.addCase(fetchRemovePost.fulfilled, (state, action) => {
      state.posts = state.posts.filter(
        (post) => post.id !== action.meta.arg.id
      );
      state.status = "resolved";
      state.error = "";
    });
    builder.addCase(fetchRemovePost.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload as string;
    });
  },
});

export const { errorLoadPost } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
