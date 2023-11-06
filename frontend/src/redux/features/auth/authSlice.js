import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const initialState = {
  _id: "",
  role: "",
  loginStatus: "",
  loginError: "",
  registerStatus: "",
  registerError: "",
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post("/users/register", credentials);
      const token = response.data.token;
      localStorage.setItem("token", token);

      return token;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post("/users/login", credentials);
      const token = response.data.token;
      localStorage.setItem("token", token);

      return token;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      localStorage.removeItem("token");
      state._id = "";
      state.role = "";
      state.loginStatus = "";
      state.loginError = "";
      state.registerStatus = "";
      state.registerError = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state, action) => {
      state.registerStatus = "pending";
    });
    builder.addCase(register.fulfilled, (state, action) => {
      const info = jwtDecode(action.payload);
      state.role = info.role;
      state._id = info.userId;
      state.registerStatus = "success";
    });
    builder.addCase(register.rejected, (state, action) => {
      state.registerStatus = "rejected";
      state.registerError = action.payload;
    });
    builder.addCase(login.pending, (state, action) => {
      state.loginStatus = "pending";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      const info = jwtDecode(action.payload);
      state.role = info.role;
      state._id = info.userId;
      state.loginStatus = "success";
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loginStatus = "rejected";
      state.loginError = action.payload;
    });
  },
});

export const selectAuth = (state) => state.auth;
export const { logout } = authSlice.actions;
export default authSlice.reducer;
