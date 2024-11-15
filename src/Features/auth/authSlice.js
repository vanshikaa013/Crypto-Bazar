import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const userExist = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    user: userExist || null,
    message: "",
  },
  reducers: {
    resetState :()=> initialState
  },
  extraReducers: (builder) => {
    builder
      // login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload || "Something went wrong";
      })
      // register
      .addCase(registerUSer.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(registerUSer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(registerUSer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload || "Something went wrong";
      })
      // logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "";
      });
  },
});

export const {resetState}= authSlice.actions

export default authSlice.reducer;

// register
export const registerUSer = createAsyncThunk(
  "AUTH/REGISTER",
  async (FormData, thunkAPI) => {
    try {
      const user = await authService.register(FormData);
      return user;
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// login
export const loginUser = createAsyncThunk(
  "AUTH/LOGIN",
  async (FormData, thunkAPI) => {
    try {
      const user = await authService.login(FormData);
      return user;
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// logout
export const logoutUser = createAsyncThunk(
  "AUTH/LOGOUT",
  async ( thunkAPI) => {
    try {
      localStorage.removeItem("user");
      return {};
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
