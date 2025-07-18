import { Link } from 'react-router-dom';
import { useAuth } from '../components/Auth/context/useAuth';
const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      <div>
        welcome {user?.name} your id is {user?.id}
      </div>
      <Link to="/Auth">go to login</Link>
    </div>
  );
};

export default Home;
