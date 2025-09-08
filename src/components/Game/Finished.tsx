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
      const result = await dispatch(
        saveUserScore({ score: game.score, id: userState.user.id })
      );
      toast.dismiss();
      if (saveUserScore.fulfilled.match(result)) {
        toast.success('score saved', {
          duration: 10000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        });
      } else {
        toast.error('score not saved', {
          duration: 10000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        });
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Save Error occurred';
      toast.dismiss();
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
    <div className="flex flex-col gap-2 text-center font-bold w-full items-center justify-center">
      <div className="mb-10 gap-2 flex flex-col">
        {isNewHighScore ? (
          <p className="text-green-400 "> New High Score: {game.score}!</p>
        ) : (
          <p className="">Your score is : {game.score}</p>
        )}
        <p>Your current high score is : {userState.user.high_score || 0}</p>
      </div>

      <button
        className="px-8 py-5 w-96  mt-4 bg-green-600 text-white rounded-lg hover:bg-gray-400 transition-colors duration-200 "
        onClick={saveScore}
      >
        Save Score
      </button>
      <button
        className="px-8 py-5 w-96  mt-4 bg-gray-600 text-white rounded-lg hover:bg-gray-400 transition-colors duration-200  "
        onClick={PlayAgain}
      >
        Play Again
      </button>

      <Link
        to="/"
        className="px-8 py-5 w-96  mt-4 bg-gray-600 text-white rounded-lg hover:bg-gray-400 transition-colors duration-200 "
      >
        Home
      </Link>
    </div>
  );
};

export default Finished;
