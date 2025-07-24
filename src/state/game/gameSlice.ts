import { createSlice } from '@reduxjs/toolkit';
import { wordBank } from './words';

interface gameData {
  gameState: 'waiting' | 'playing' | 'finished';

  time: number;
  score: number;
  words: string[];
  currentWord: string;
}

export const initialState: gameData = {
  gameState: 'waiting',
  time: 60,
  score: 0,
  words: wordBank,
  currentWord: '',
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: (state) => {
      state.gameState = 'playing';
    },
    endGame: (state) => {
      state.gameState = 'finished';
    },
    setWord: (state) => {
      //get random word
      state.currentWord = pickRandomWord(state.words);
    },
    increaseScore: (state) => {
      state.score += 1;
    },
  },
});

function pickRandomWord(words: string[]) {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

export const { startGame, endGame, setWord, increaseScore } = gameSlice.actions;
export default gameSlice.reducer;
