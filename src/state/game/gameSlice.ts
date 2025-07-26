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
  time: 10,
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
      state.currentWord = pickRandomWord(state.words);
      state.score = 0;
    },
    endGame: (state) => {
      state.gameState = 'finished';
      state.currentWord = '';
    },
    nextWord: (state) => {
      //get random word
      state.currentWord = pickRandomWord(state.words);
      state.score += 1;
    },
    resetGame: (state) => {
      state.gameState = 'waiting';
      state.currentWord = '';
    },
  },
});

function pickRandomWord(words: string[]) {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

export const { startGame, endGame, nextWord, resetGame } = gameSlice.actions;
export default gameSlice.reducer;
