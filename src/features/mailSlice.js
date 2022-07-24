import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sendMessageIsOpen: false,
};

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    openSendMessage(state) {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage(state) {
      state.sendMessageIsOpen = false;
    },
  },
});

export const mailActions = mailSlice.actions;

export default mailSlice.reducer;
