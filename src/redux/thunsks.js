import { createAsyncThunk } from "@reduxjs/toolkit";
import { editUsers, getUsers } from "../service/serviceApi";

export const getUsersThunk = createAsyncThunk(
  "users/fetchAll",
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

export const editUsersThunk = createAsyncThunk(
  "users/editFollowers",
  async (users, { rejectWithValue }) => {
    try {
      console.log(users);
      await editUsers(users.id, users);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
