import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    open: false,
    position: ["0px", "0px"],
    node: null,
  },
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{ position: [x: string, y: string]; node: JSX.Element }>,
    ) => {
      const [x, y] = action.payload.position;
      return {
        ...state,
        open: true,
        position: [x, y],
        node: action.payload.node,
      };
    },
    closeModal: (state) => ({ ...state, open: false }),
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
