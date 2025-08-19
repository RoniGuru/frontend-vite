import { Link } from 'react-router-dom';
import type { RootState } from '../state/store';
import { useSelector } from 'react-redux';
import LeaderBoard from '../components/UI/LeaderBoard';

const Home = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <div className="flex flex-col items-center  gap-6 justify-center h-full w-full ">
      <LeaderBoard />
      <div className="h-4/5 flex flex-col items-center w-full  text-2xl justify-between">
        <div className="text-white text-7xl font-bold mt-10 ">
          Welcome {user?.username}
        </div>
        <Link
          to="/game"
          className=" bg-slate-400 w-[400px] h-[100px]   font-bold rounded-lg hover:bg-slate-700  text-5xl  flex items-center justify-center"
        >
          Play Game
        </Link>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
