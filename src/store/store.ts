import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./post/postsSlice";
import { pagesReducer } from "./page/pagesSlice";
import { commentsReducer } from "./comment/commentSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    pages: pagesReducer,
    comments: commentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
