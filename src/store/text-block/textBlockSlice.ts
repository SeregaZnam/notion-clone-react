import { TextBlockModel } from "../../types/TextBlock.model";
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAddTextBlock,
  fetchChangeTextBlock,
  fetchRemoveTextBlock,
  fetchTextBlocks,
} from "./textBlockThunks";

interface TextBlockState {
  textBlocks: TextBlockModel[];
}

const initialState: TextBlockState = {
  textBlocks: [],
};

export const textBlockSlice = createSlice({
  name: "textBlocks",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTextBlocks.fulfilled, (state, action) => {
      state.textBlocks = action.payload;
    });

    builder.addCase(fetchAddTextBlock.fulfilled, (state, action) => {
      state.textBlocks = [...state.textBlocks, action.payload];
    });

    builder.addCase(fetchChangeTextBlock.fulfilled, (state, action) => {
      state.textBlocks = state.textBlocks.map((testBlock) =>
        testBlock.id === action.payload.id ? action.payload : testBlock,
      );
    });

    builder.addCase(fetchRemoveTextBlock.fulfilled, (state, action) => {
      state.textBlocks = state.textBlocks.filter(
        (textBlock) => textBlock.id !== action.meta.arg.id,
      );
    });
  },
});

export const textBlocksReducer = textBlockSlice.reducer;
