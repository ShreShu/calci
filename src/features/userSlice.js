import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: "",
  inbox: [],
  sent: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = "";
    },
    inbox(state, action) {
      console.log(action);
      state.inbox = action.payload;
    },
    sent(state, action) {
      state.sent = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
