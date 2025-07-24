import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../state/store';
import { startGame, endGame, nextWord } from '../state/game/gameSlice';
import { useState } from 'react';
import Timer from '../components/Game/Timer';

const Game = () => {
  const [userInput, setUserInput] = useState<string>();

  const game = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch<AppDispatch>();

  function handleStart() {
    dispatch(startGame());
    setUserInput('');
  }
  function handleEnd() {
    dispatch(endGame());
  }

  //changes userinput and checks if correct
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setUserInput(value);

    if (value.toLowerCase() === game.currentWord.toLowerCase()) {
      dispatch(nextWord());
      setTimeout(() => setUserInput(''), 50); //timeout for feedback
    }
  }

  return (
    <div className="bg-gray-900 h-screen w-screen  flex justify-center items-center ">
      <div className="text-3xl bg-slate-500 rounded-lg   w-1/2 h-3/4 py-16 flex justify-center flex-col items-center gap-4 ">
        {/* Buttons */}
        <div className="flex justify-center ">
          {/* Game */}
          {game.gameState === 'playing' ? (
            <div className="items-center gap-6 flex flex-col justify-between ">
              {/*Score and Time */}
              <div className="flex gap-4  font-bold bg-gray-300 rounded-lg p-4">
                <div className="px-4 py-2">score : {game.score}</div>
                <Timer />
              </div>
              <div className="text-center items-center ">
                {/*Current Word and User Input */}
                <div className="font-bold text-5xl text-white ">
                  {game.currentWord || '\u00A0'}
                </div>
                <input
                  value={userInput}
                  onChange={handleInputChange}
                  className="p-2 mt-6 rounded-lg  focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
              </div>
              <button
                className="px-6 py-3 mt-4 bg-gray-600 text-white rounded-lg hover:bg-gray-400 transition-colors duration-200 font-semibold"
                onClick={handleEnd}
              >
                End Game
              </button>
            </div>
          ) : (
            <button
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-400 transition-colors duration-200 font-semibold"
              onClick={handleStart}
            >
              Start Game
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;
