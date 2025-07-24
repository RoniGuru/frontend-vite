import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../state/store';
import { startGame, endGame, nextWord } from '../state/game/gameSlice';
import { useState, useEffect, useRef } from 'react';

const Game = () => {
  const [userInput, setUserInput] = useState<string>();

  const game = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch<AppDispatch>();
  const [seconds, setSeconds] = useState(game.time);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (game.gameState === 'playing' && seconds > 0) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds <= 0 && game.gameState === 'playing') {
      dispatch(endGame());
      setSeconds(game.time);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [game.gameState, seconds, dispatch, game.time]);

  function handleStart() {
    dispatch(startGame());
  }
  function handleEnd() {
    dispatch(endGame());
  }

  //changes userinput and checks if correct
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setUserInput(value);

    if (value === game.currentWord) {
      dispatch(nextWord());
      setTimeout(() => setUserInput(''), 50); //timeout for feedback
    }
  }

  return (
    <div className="bg-gray-500 h-screen w-screen  ">
      <div>score : {game.score}</div>
      <div>{seconds}</div>
      <div>{game.currentWord}</div>
      <input value={userInput} onChange={handleInputChange} />

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
