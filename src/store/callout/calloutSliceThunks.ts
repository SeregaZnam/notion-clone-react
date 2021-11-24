import { createAsyncThunk } from "@reduxjs/toolkit";
import { CalloutModel } from "../../types/Callout.model";
import { NotionApi } from "../../services/notionApi";
import { v4 as uuidv4 } from "uuid";

export const fetchCallouts = createAsyncThunk(
  "callouts/fetchCallouts",
  async ({ id: pageId }: Pick<CalloutModel, "id">) => {
    const response = await NotionApi.Callouts.getCallouts(pageId);

    return await response.json();
  },
);

export const fetchAddCallout = createAsyncThunk(
  "callouts/fetchAddCallout",
  async ({ pageId, order, text, imageClass }: Omit<CalloutModel, "id">) => {
    const newCallout: CalloutModel = {
      text,
      order,
      pageId,
      imageClass,
      id: uuidv4(),
    };
    const response = await NotionApi.Callouts.addPageCallouts(newCallout);

    return await response.json();
  },
);
