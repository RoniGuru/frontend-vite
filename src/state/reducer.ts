import gameSliceReducer from './game/gameSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({ game: gameSliceReducer });

export default rootReducer;
