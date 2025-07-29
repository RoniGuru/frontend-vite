import { Link } from 'react-router-dom';
import { useAuth } from '../Context/Auth/useAuth';
import type { RootState } from '../state/store';
import { useSelector } from 'react-redux';
import LeaderBoard from '../components/UI/LeaderBoard';
const Home = () => {
  const user = useSelector((state: RootState) => state.user.user);

  const { logout } = useAuth();
  return (
    <div className="flex flex-col">
      <div>
        welcome {user?.name} your id is {user?.id}
      </div>
      <LeaderBoard />
      <Link to="/game" className="p-4 bg-slate-400 w-36 ">
        Play Game
      </Link>
      <button className="btn-primary" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
