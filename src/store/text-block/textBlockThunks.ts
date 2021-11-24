import { createAsyncThunk } from "@reduxjs/toolkit";
import { NotionApi } from "../../services/notionApi";
import { v4 as uuidv4 } from "uuid";
import { TextBlockModel } from "../../types/TextBlock.model";
import { RootState } from "../store";

export const fetchTextBlocks = createAsyncThunk(
  "textBlocks/fetchTextBlocks",
  async ({ id: pageId }: Pick<TextBlockModel, "id">) => {
    const response = await NotionApi.TextBlocks.getTextBlocks(pageId);

    return await response.json();
  },
);

export const fetchAddTextBlock = createAsyncThunk(
  "textBlocks/fetchAddTextBlock",
  async ({ pageId, text, order }: Pick<TextBlockModel, "pageId" | "text" | "order">) => {
    const newTextBlock: TextBlockModel = {
      text,
      pageId,
      order,
      id: uuidv4(),
    };
    const response = await NotionApi.TextBlocks.addTextBlock(newTextBlock);

    return await response.json();
  },
);

export const fetchChangeTextBlock = createAsyncThunk(
  "textBlocks/fetchChangeTextBlock",
  async (data: Pick<TextBlockModel, "id"> & Partial<Omit<TextBlockModel, "id">>, { getState }) => {
    const state = getState() as RootState;
    const textBlocks = state.textBlocks.textBlocks;
    const currentTextBlock = textBlocks.find((textBlock) => textBlock.id === data.id);

    const response = await NotionApi.TextBlocks.changeTextBlock({
      ...currentTextBlock,
      ...data,
    });

    return await response.json();
  },
);

export const fetchRemoveTextBlock = createAsyncThunk(
  "textBlocks/fetchDeleteTextBlock",
  async ({ id: textBlockId }: Pick<TextBlockModel, "id">) => {
    const response = await NotionApi.TextBlocks.removeTextBlock(textBlockId);

    return await response.json();
  },
);
