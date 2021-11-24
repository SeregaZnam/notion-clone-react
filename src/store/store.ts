import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./post/postsSlice";
import { pagesReducer } from "./page/pagesSlice";
import { commentsReducer } from "./comment/commentSlice";
import { calloutsReducer } from "./callout/calloutSlice";
import { textBlocksReducer } from "./text-block/textBlockSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    pages: pagesReducer,
    comments: commentsReducer,
    callouts: calloutsReducer,
    textBlocks: textBlocksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
