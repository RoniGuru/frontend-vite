import { useSelector, useDispatch } from 'react-redux';
import type { AppDispatch, RootState } from '../../state/store';
import { useEffect } from 'react';
import { getLeaderBoard } from '../../state/leaderboard/leaderboardSlice';
import toast from 'react-hot-toast';

const LeaderBoard = () => {
  const leaderboardState = useSelector((state: RootState) => state.leaderboard);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getLeaderBoard());
  }, [dispatch]);

  function handleGetLeaderboard() {
    try {
      dispatch(getLeaderBoard());
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Error trying to get leaderboard';

      toast.error(errorMessage, {
        duration: 10000,
        style: {
          background: '#363636',
          color: '#fff',
        },
      });
    }
  }

  return (
    <div className="bg-gray-900 flex flex-col w-[500px] h-[650px] border border-gray-600 text-2xl absolute top-40 left-20">
      <h1 className="text-center text-white font-bold py-2 bg-gray-800">
        Leaderboard
      </h1>
      <div className="flex flex-col flex-1 gap-1">
        {Array.from({ length: 10 }, (_, index) => {
          const entry = leaderboardState.leaderboard[index];
          return (
            <div
              key={index}
              className="flex justify-between   px-4 py-2 border-b border-gray-600 text-white"
            >
              <span className="text-gray-400">#{index + 1}</span>
              <span className="flex-1 mx-2">
                {entry ? entry.username : '---'}
              </span>
              <span className="font-mono">
                {entry ? entry.high_score : '---'}
              </span>
            </div>
          );
        })}
      </div>
      <button
        onClick={handleGetLeaderboard}
        className="bg-slate-400 hover:bg-slate-700 text-white h-full font-bold"
      >
        Refresh
      </button>
    </div>
  );
};

export default LeaderBoard;
