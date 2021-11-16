import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./postsSlice";
import { pagesReducer } from "./pagesSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    pages: pagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
