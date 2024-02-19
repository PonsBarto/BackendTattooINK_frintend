import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    logout: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});
export const { login, logout } = userSlice.actions;
export const userData = (state) => state.user;
export const updateUserData = (userData) => {
  return {
    type: "UPDATE_USER_DATA",
    payload: userData,
  };
};
export default userSlice.reducer;
