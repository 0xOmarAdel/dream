import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const token = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

const initialState = {
  user: null,
};

export const register = createAsyncThunk(
  "auth/register",
  async (registrationData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        registrationData
      );
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;
      }

      toast.success("Account created successfully.");
      return response.data.user;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred while logging in.");
      }
    }
  }
);

export const login = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/v1/auth/login",
      credentials
    );
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
    }
    return response.data.user;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error("An error occurred while logging in.");
    }
  }
});

const userAuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const { setUser, logout } = userAuthSlice.actions;
export const selectUser = (state) => state.auth.user;

export default userAuthSlice.reducer;
