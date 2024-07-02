
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  connected: false,
};

const URL = 'http://localhost:3001/api/v1/user';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userCredentials, thunkApi) => {
    try {
      const response = await axios.post(`${URL}/login`, userCredentials);
      thunkApi.dispatch(getUser(response.data.body.token));
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const getUser = createAsyncThunk(
  'auth/getUser',
  async (token, thunkApi) => {
    try {
      const response = await axios.post(
        `${URL}/profile`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      return {
        ...initialState,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.body.token;
        state.error = null;
        state.connected = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.connected = false;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.body;
        state.error = null;
        state.connected = true;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
