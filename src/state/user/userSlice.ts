import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../../Context/Auth/type';

export const initialState: User = {
  id: 0,
  name: '',
  created_at: '',
  high_score: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      const { id, name, created_at, high_score } = action.payload;
      state.id = id;
      state.created_at = created_at;
      state.name = name;
      state.high_score = high_score;
    },
    clearUser: (state) => {
      state.id = 0;
      state.high_score = 0;
      state.name = '';
      state.created_at = '';
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
