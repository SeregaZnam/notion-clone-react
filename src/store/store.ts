import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./postsSlice";
import { pagesReducer } from "./pagesSlice";
import { commentsReducer } from "./commentSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    pages: pagesReducer,
    comments: commentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
