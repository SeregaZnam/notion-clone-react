import { CalloutModel } from "../../types/Callout.model";
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAddCallout,
  fetchCallouts,
  fetchChangeCallout,
  fetchRemoveCallout,
} from "./calloutSliceThunks";

interface CalloutState {
  callouts: CalloutModel[];
}

const initialState: CalloutState = {
  callouts: [],
};

export const calloutSlice = createSlice({
  name: "callouts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCallouts.fulfilled, (state, action) => {
      state.callouts = action.payload;
    });

    builder.addCase(fetchAddCallout.fulfilled, (state, action) => {
      state.callouts = [...state.callouts, action.payload];
    });

    builder.addCase(fetchRemoveCallout.fulfilled, (state, action) => {
      state.callouts = state.callouts.filter((callout) => callout.id !== action.meta.arg.id);
    });

    builder.addCase(fetchChangeCallout.fulfilled, (state, action) => {
      state.callouts = state.callouts.map((callout) =>
        callout.id === action.payload.id ? action.payload : callout,
      );
    });
  },
});

export const calloutsReducer = calloutSlice.reducer;
