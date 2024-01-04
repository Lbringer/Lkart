import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: {},
  error: "",
  fetched: false,
};

export const signUp = createAsyncThunk("user/signup", async (details) => {
  const res = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=
                AIzaSyCVp5U2kBGobYxzVL0lQaE6Zr87t7vB6lU`,
    {
      ...details,
      returnSecureToken: true,
    }
  );
  return { ...res, idToken: res.data.idToken, localId: res.data.localId };
});
export const login = createAsyncThunk("user/login", async (details) => {
  const res = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=
                AIzaSyCVp5U2kBGobYxzVL0lQaE6Zr87t7vB6lU`,
    {
      ...details,
      returnSecureToken: true,
    }
  );
  return { ...res, idToken: res.data.idToken, localId: res.data.localId };
});

export const isLoggedIn = createAsyncThunk("user/isLoggedIn", async () => {
  const token = localStorage.getItem("token");
  const res = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCVp5U2kBGobYxzVL0lQaE6Zr87t7vB6lU`,
    {
      idToken: token,
    }
  );
  return { ...res, idToken: token, localId: res.data.users[0].localId };
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    LOGOUT: (state) => {
      localStorage.removeItem("token");
      state.loading = false;
      state.data = {};
      state.error = "";
      state.fetched = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      localStorage.setItem("token", action.payload.data.idToken);
      state.error = "";
      state.fetched = true;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.loading = false;
      state.data = {};
      state.error = action.error.message;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.data = {};
      state.error = action.error.message;
    });
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      localStorage.setItem("token", action.payload.data.idToken);
      state.error = "";
      state.fetched = true;
    });
    builder.addCase(isLoggedIn.rejected, (state, action) => {
      state.loading = false;
      state.data = {};
      state.error = action.error.message;
    });
    builder.addCase(isLoggedIn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(isLoggedIn.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
      state.fetched = true;
    });
  },
});

// eslint-disable-next-line
export const { LOGOUT } = userSlice.actions;

export default userSlice.reducer;
