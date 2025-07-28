import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../../Context/Auth/type';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/api';
import type { updateResponse } from './userResponse';
import axios from 'axios';

interface userState {
  user: User;
  loading: boolean;
}

const initialState: userState = {
  user: { id: 0, name: '', created_at: '', high_score: 0 },
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
      state.user.name = '';
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
      });
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
