import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';
import { api } from '../../api/api';
import axios from 'axios';

interface leaderboardData {
  id: number;
  name: string;
  high_score: number;
}
interface leaderboardState {
  leaderboard: leaderboardData[];
  loading: boolean;
  error: string;
}

const initialState: leaderboardState = {
  leaderboard: [],
  loading: false,
  error: '',
};

export const getLeaderBoard = createAsyncThunk(
  'leaderboard/get',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/user/leaderboard');
      const data: leaderboardData[] = response.data.leaderboard;
      return data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.log(error.response);
        if (error.response?.data.error) {
          return rejectWithValue(error.response.data.error);
        }
        return rejectWithValue('An error occurred while fetching leaderboard');
      }
      return rejectWithValue('Network error');
    }
  }
);

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    clearLeaderboard: (state) => {
      state.leaderboard = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLeaderBoard.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getLeaderBoard.fulfilled,
        (state, action: PayloadAction<leaderboardData[]>) => {
          state.leaderboard = action.payload;
          state.loading = false;
        }
      )
      .addCase(getLeaderBoard.rejected, (state, action) => {
        state.loading = false;
        // For rejected actions with rejectWithValue, check if it was rejected with a value
        if (action.payload) {
          state.error = action.payload as string;
        } else {
          state.error = action.error.message || 'Failed to fetch leaderboard';
        }
      });
  },
});

export const { clearLeaderboard } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
