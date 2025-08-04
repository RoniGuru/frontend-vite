import { Link } from 'react-router-dom';
import type { AppDispatch, RootState } from '../../state/store';
import { useDispatch, useSelector } from 'react-redux';
import { saveUserScore } from '../../state/user/userSlice';
import { startGame } from '../../state/game/gameSlice';
import toast from 'react-hot-toast';

const Finished = () => {
  const game = useSelector((state: RootState) => state.game);
  const userState = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  const currentHighScore = userState.user.high_score || 0;
  const isNewHighScore = game.score > currentHighScore;

  async function saveScore() {
    try {
      const result = dispatch(
        saveUserScore({ score: game.score, id: userState.user.id })
      );
      if (saveUserScore.fulfilled.match(result)) {
        console.log('New high score:', result.payload);
      } else {
        console.log('score not saved');
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Save Error occurred';

      toast.error(errorMessage, {
        duration: 10000,
        style: {
          background: '#363636',
          color: '#fff',
        },
      });
    }
  }

  async function PlayAgain() {
    dispatch(startGame());
  }

  return (
    <div className="flex flex-col gap-2 text-center font-bold w-full items-center">
      {isNewHighScore ? (
        <p className="text-green-400 "> New High Score: {game.score}!</p>
      ) : (
        <p className="">Your score is : {game.score}</p>
      )}

      <p className="text-white">
        Your current high score is : {userState.user.high_score || 0}
      </p>
      <button
        className="px-6 py-3 mt-4 bg-green-600 text-white rounded-lg hover:bg-gray-400 transition-colors duration-200 w-3/4"
        onClick={saveScore}
      >
        Save Score
      </button>
      <button
        className="px-6 py-3 mt-4 bg-gray-600 text-white rounded-lg hover:bg-gray-400 transition-colors duration-200  w-3/4"
        onClick={PlayAgain}
      >
        Play Again
      </button>

      <Link
        to="/"
        className="px-6 py-3 mt-4 bg-gray-600 text-white rounded-lg hover:bg-gray-400 transition-colors duration-200  w-3/4"
      >
        Home
      </Link>
    </div>
  );
};

export default Finished;
