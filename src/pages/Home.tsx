import { Link } from 'react-router-dom';
import { useAuth } from '../Context/Auth/useAuth';
import type { RootState } from '../state/store';
import { useSelector } from 'react-redux';
const Home = () => {
  const user = useSelector((state: RootState) => state.user.user);

  const { logout, get } = useAuth();
  return (
    <div className="flex flex-col">
      <div>
        welcome {user?.name} your id is {user?.id}
      </div>

      <button onClick={get} className="p-4 bg-slate-400 w-36 ">
        Get User
      </button>
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
