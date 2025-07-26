import { Link } from 'react-router-dom';
import type { AppDispatch, RootState } from '../../state/store';
import { useDispatch, useSelector } from 'react-redux';
import { saveUserScore } from '../../state/user/userSlice';

const Finished = () => {
  const game = useSelector((state: RootState) => state.game);
  const userState = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

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
      console.log('Unexpected error:', error);
    }
  }

  return (
    <div>
      <p>Your score was : {game.score}</p>
      <p>Your high score is : {userState.user.high_score}</p>
      <button onClick={saveScore}>Save Score</button>
      <Link to="/"> Go back Home</Link>
    </div>
  );
};

export default Finished;
