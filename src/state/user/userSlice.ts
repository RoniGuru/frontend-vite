import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from '@reduxjs/toolkit';
import type { UpdateUserDTO, User } from '../../Context/Auth/type';
import type { updateResponse } from './userResponse';
import axios from 'axios';
import { api } from '../../api/index';

interface userState {
  user: User;
  loading: boolean;
}

const initialState: userState = {
  user: { id: 0, username: '', created_at: '', high_score: 0 },
  loading: false,
};

export const saveUserScore = createAsyncThunk(
  'user/saveUserScore',
  async ({ score, id }: { score: number; id: number }, { rejectWithValue }) => {
    try {
      const response = await api.put(`/user/${id}`, { high_score: score });
      const data: updateResponse = response.data;
      return data.user.high_score;
    } catch (error: unknown) {
      // Handle axios errors
      if (axios.isAxiosError(error)) {
        // Server responded with error status
        if (error.response) {
          return rejectWithValue({
            message: error.response.data?.message || 'Failed to save score',
            status: error.response.status,
          });
        }
        // Network error or request setup error
        return rejectWithValue({
          message: error.message || 'Network error occurred',
          status: null,
        });
      }
      // Non-axios error
      return rejectWithValue({
        message: 'An unexpected error occurred',
        status: null,
      });
    }
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (
    {
      update,
      password,
      id,
    }: { update: Partial<UpdateUserDTO>; password: string; id: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.put(`/user/${id}`, { password, ...update });
      const data: updateResponse = response.data;
      return data.user;
    } catch (error: unknown) {
      // Handle axios errors
      if (axios.isAxiosError(error)) {
        // Server responded with error status
        if (error.response) {
          return rejectWithValue({
            message: error.response.data?.message || 'Failed to update user',
            status: error.response.status,
          });
        }
        // Network error or request setup error
        return rejectWithValue({
          message: error.message || 'Network error occurred',
          status: null,
        });
      }
      // Non-axios error
      return rejectWithValue({
        message: 'An unexpected error occurred',
        status: null,
      });
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user.id = 0;
      state.user.high_score = 0;
      state.user.username = '';
      state.user.created_at = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveUserScore.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        saveUserScore.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.user.high_score = action.payload;
          state.loading = false;
        }
      )
      .addCase(saveUserScore.rejected, (state) => {
        state.loading = false;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        updateUser.fulfilled,
        (state, action: PayloadAction<Partial<UpdateUserDTO>>) => {
          state.loading = false;
          if (action.payload.username) {
            state.user.username = action.payload.username;
          }
        }
      )
      .addCase(updateUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
