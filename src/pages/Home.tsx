import { Link } from 'react-router-dom';
import type { RootState } from '../state/store';
import { useSelector } from 'react-redux';
import LeaderBoard from '../components/UI/LeaderBoard';
const Home = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <div className="flex flex-col items-center  gap-6 justify-center h-full">
      <div className="text-white text-4xl font-bold ">Welcome {user?.name}</div>
      <LeaderBoard />
      <Link
        to="/game"
        className="p-4 bg-slate-400 w-36 text-center font-bold rounded-lg hover:bg-slate-700 "
      >
        Play Game
      </Link>
    </div>
  );
};

export default Home;
