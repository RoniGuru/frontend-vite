import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../state/store';
import { startGame, endGame, nextWord } from '../state/game/gameSlice';
import { useState } from 'react';

const Game = () => {
  const [userInput, setUserInput] = useState<string>();

  const game = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch<AppDispatch>();

  function handleStart() {
    dispatch(startGame());
  }
  function handleEnd() {
    dispatch(endGame());
  }

  function checkWord() {
    if (game.currentWord === userInput) {
      dispatch(nextWord());
    }
  }

  return (
    <div className="bg-gray-500 h-screen w-screen  ">
      <div>{game.currentWord}</div>
      <input value={userInput} onChange={(e) => setUserInput(e.target.value)} />
      <button
        className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 font-semibold"
        onClick={checkWord}
      >
        next
      </button>
      <div>
        <button
          className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 font-semibold"
          onClick={handleStart}
        >
          Start Game
        </button>
        <button
          className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 font-semibold"
          onClick={handleEnd}
        >
          End Game
        </button>
      </div>
    </div>
  );
};

export default Game;
