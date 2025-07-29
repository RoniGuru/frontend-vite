import gameSliceReducer from './game/gameSlice';
import { combineReducers } from '@reduxjs/toolkit';
import userSliceReducer from './user/userSlice';
import leaderboardSliceReducer from './leaderboard/leaderboardSlice';

const rootReducer = combineReducers({
  game: gameSliceReducer,
  user: userSliceReducer,
  leaderboard: leaderboardSliceReducer,
});

export default rootReducer;
