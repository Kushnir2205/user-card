import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "../service/serviceApi";

export const getUsersThunk = createAsyncThunk(
  "users/fetchAlll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getUsers();
      console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
