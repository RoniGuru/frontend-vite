import { Link } from 'react-router-dom';
import { useAuth } from '../Context/Auth/useAuth';
const Home = () => {
  const { user, accessToken, logout, get } = useAuth();
  return (
    <div className="flex flex-col">
      <div>
        welcome {user?.name} your id is {user?.id} access token is {accessToken}
      </div>
      <Link to="/Auth">go to login</Link>

      <button onClick={get} className="p-4 bg-slate-400 w-36 ">
        Get User
      </button>
      <button className="btn-primary" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
