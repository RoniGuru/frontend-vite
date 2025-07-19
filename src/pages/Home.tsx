import { Link } from 'react-router-dom';
import { useAuth } from '../components/Auth/context/useAuth';
const Home = () => {
  const { user, accessToken } = useAuth();
  return (
    <div>
      <div>
        welcome {user?.name} your id is {user?.id} access token is {accessToken}
      </div>
      <Link to="/Auth">go to login</Link>
    </div>
  );
};

export default Home;
