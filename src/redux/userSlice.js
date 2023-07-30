import { createSlice } from "@reduxjs/toolkit";
import { getUsersThunk } from "./thunsks";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersThunk.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUsersThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(getUsersThunk.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export const usersReducer = usersSlice.reducer;
