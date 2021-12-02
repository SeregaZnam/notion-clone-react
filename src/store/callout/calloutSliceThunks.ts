import { createAsyncThunk } from "@reduxjs/toolkit";
import { CalloutModel } from "../../types/Callout.model";
import { NotionApi } from "../../services/notionApi";
import { v4 as uuidv4 } from "uuid";
import { SectionType } from "../../types/SectionType.enum";
import { RootState } from "../store";

export const fetchCallouts = createAsyncThunk(
  "callouts/fetchCallouts",
  async ({ id: pageId }: Pick<CalloutModel, "id">) => {
    const response = await NotionApi.Callouts.getCallouts(pageId);

    return await response.json();
  },
);

export const fetchAddCallout = createAsyncThunk(
  "callouts/fetchAddCallout",
  async ({ pageId, order, text }: Omit<CalloutModel, "id" | "type" | "imageClass">) => {
    const newCallout: CalloutModel = {
      text,
      order,
      pageId,
      imageClass: "icon-81",
      id: uuidv4(),
      type: SectionType.Callout,
    };
    const response = await NotionApi.Callouts.addPageCallouts(newCallout);

    return await response.json();
  },
);

export const fetchRemoveCallout = createAsyncThunk(
  "callouts/fetchRemoveCallout",
  async ({ id: calloutId }: Pick<CalloutModel, "id">) => {
    const response = await NotionApi.Callouts.removeCallouts(calloutId);

    return await response.json();
  },
);

export const fetchChangeCallout = createAsyncThunk(
  "callouts/fetchChangeCallout",
  async (data: Pick<CalloutModel, "id"> & Partial<Omit<CalloutModel, "id">>, { getState }) => {
    const state = getState() as RootState;
    const callouts = state.callouts.callouts;
    const currentPageCallouts = callouts.find((callout) => callout.id === data.id);

    const response = await NotionApi.Callouts.changePageCallouts({
      ...currentPageCallouts,
      ...data,
    });

    return await response.json();
  },
);
