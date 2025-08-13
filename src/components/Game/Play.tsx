import Timer from './Timer';
import { nextWord, endGame } from '../../state/game/gameSlice';
import type { AppDispatch, RootState } from '../../state/store';
import { useDispatch, useSelector } from 'react-redux';

const Play = ({
  setUserInput,
  userInput,
}: {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const game = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch<AppDispatch>();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.trim();
    setUserInput(value);

    if (value.toLowerCase() === game.currentWord.toLowerCase()) {
      dispatch(nextWord());
      setTimeout(() => setUserInput(''), 50); //timeout for feedback
    }
  }

  function handleEnd() {
    setUserInput('');
    dispatch(endGame());
  }

  return (
    <div className="items-center gap-6 flex flex-col justify-between h-4/5  ">
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
          autoFocus
          onChange={handleInputChange}
          className="p-2 mt-6  rounded-lg  focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
      </div>
      <button
        className="px-8 py-5 w-96  mt-4 bg-gray-600 text-white rounded-lg hover:bg-gray-400 transition-colors duration-200 font-semibold"
        onClick={handleEnd}
      >
        End Game
      </button>
    </div>
  );
};

export default Play;
