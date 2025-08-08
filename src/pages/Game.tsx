import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../state/store';
import { useState, useEffect } from 'react';
import Waiting from '../components/Game/Waiting';
import Play from '../components/Game/Play';
import Finished from '../components/Game/Finished';
import { resetGame } from '../state/game/gameSlice';

const Game = () => {
  const [userInput, setUserInput] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(resetGame());
  }, [dispatch]);

  const game = useSelector((state: RootState) => state.game);
  const renderGameContent = () => {
    switch (game.gameState) {
      case 'finished':
        return <Finished />;
      case 'playing':
        return <Play userInput={userInput} setUserInput={setUserInput} />;
      case 'waiting':
      default:
        return <Waiting setUserInput={setUserInput} />;
    }
  };

  return (
    <div className=" h-screen w-screen  flex justify-center items-center  ">
      <div className="text-5xl bg-slate-500 rounded-lg h-4/5 w-4/5   flex justify-center flex-col items-center gap-4 ">
        {/* Buttons */}
        <div className="flex justify-center h-full items-center ">
          {renderGameContent()}
        </div>
      </div>
    </div>
  );
};

export default Game;
