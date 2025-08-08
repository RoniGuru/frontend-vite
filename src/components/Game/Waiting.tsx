import type { AppDispatch } from '../../state/store';
import { useDispatch } from 'react-redux';
import { startGame } from '../../state/game/gameSlice';
import { Link } from 'react-router-dom';

const Waiting = ({
  setUserInput,
}: {
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  function handleStart() {
    dispatch(startGame());
    setUserInput('');
  }
  return (
    <div className="flex flex-col text-center justify-center">
      <button
        className="px-8 py-5 w-96  bg-gray-600 text-white rounded-lg hover:bg-gray-400 transition-colors duration-200 font-semibold "
        onClick={handleStart}
      >
        Start Game
      </button>
      <Link
        to="/"
        className="px-8 py-5 w-96 mt-4 bg-gray-600 text-white rounded-lg hover:bg-gray-400 transition-colors duration-200 font-semibold"
      >
        Go Back
      </Link>
    </div>
  );
};

export default Waiting;
