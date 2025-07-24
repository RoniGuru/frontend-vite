import gameSliceReducer from './game/gameSlice';
import { combineReducers } from '@reduxjs/toolkit';
import userSliceReducer from './user/userSlice';

const rootReducer = combineReducers({
  game: gameSliceReducer,
  user: userSliceReducer,
});

export default rootReducer;
