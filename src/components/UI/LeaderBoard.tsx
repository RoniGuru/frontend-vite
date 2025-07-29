import { useSelector, useDispatch } from 'react-redux';
import type { AppDispatch, RootState } from '../../state/store';
import { useEffect } from 'react';
import { getLeaderBoard } from '../../state/leaderboard/leaderboardSlice';

const LeaderBoard = () => {
  const leaderboardState = useSelector((state: RootState) => state.leaderboard);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getLeaderBoard());
  }, [dispatch]);

  return (
    <div className="bg-red-500 flex ">
      {leaderboardState.leaderboard.map((entry, index) => (
        <div key={index} className="bg-slate-400">
          {entry.name}: {entry.high_score}
        </div>
      ))}
    </div>
  );
};

export default LeaderBoard;
