import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../state/store';
import { endGame } from '../../state/game/gameSlice';
import { useState, useEffect, useRef } from 'react';

const Timer = () => {
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
    } else if (game.gameState === 'finished') {
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

  return (
    <div
      className="  px-4 py-2 w-24 text-center
        bg-gray-900 
        rounded-lg 
        border-2 border-gray-700
        font-mono  
    
        transition-colors duration-300
        shadow-lg text-white"
    >
      {seconds}
    </div>
  );
};

export default Timer;
