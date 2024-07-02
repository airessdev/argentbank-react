 import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state
const initialState = {
    email: '',
    firstName: '',
    lastName: '',
    id: '',
    createdAt: '',
    updatedAt: '',
    userName: '',
    loading: false,
    error: null,
};

const URL = 'http://localhost:3001/api/v1/user/profile';

// Async thunk to fetch user data
export const fetchUserData = createAsyncThunk(
    'user/fetchUserData',
    async (token, { rejectWithValue }) => {
        try {
            const response = await axios.post(URL, null, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data.body;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

// Async thunk to update user data
export const updateUserData = createAsyncThunk(
    'user/updateUserData',
    async ({ token, userNames }, { rejectWithValue }) => {
        try {
            const response = await axios.put(URL, { userName: userNames.userName }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data.body;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

// User slice
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        emptyUserData(state) {
            return { ...initialState };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserData.fulfilled, (state, { payload }) => {
                state.email = payload.email;
                state.firstName = payload.firstName;
                state.lastName = payload.lastName;
                state.userName = payload.userName;
                state.id = payload.id;
                state.createdAt = payload.createdAt;
                state.updatedAt = payload.updatedAt;
                state.loading = false;
            })
            .addCase(fetchUserData.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(updateUserData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateUserData.fulfilled, (state, { payload }) => {
                state.firstName = payload.firstName;
                state.lastName = payload.lastName;
                state.userName = payload.userName;
                state.updatedAt = payload.updatedAt;
                state.loading = false;
            })
            .addCase(updateUserData.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });
    },
});

// Selectors
export const getUserData = (state) => state.user;

// Actions
export const { emptyUserData } = userSlice.actions;

// Reducer
export default userSlice.reducer;
