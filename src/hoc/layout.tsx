import LoadingScreen from '../components/UI/LoadingScreen';
import NavBar from '../components/UI/NavBar';
import { useSelector } from 'react-redux';
import type { RootState } from '../state/store';
import { useAuth } from '../Context/Auth/useAuth';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useAuth();
  const stateLoading = useSelector(
    (state: RootState) => state.user.loading || false
  );

  return (
    <div className="h-full w-full">
      <NavBar />
      {isLoading || stateLoading ? <LoadingScreen /> : null}

      {children}
    </div>
  );
};

export default RootLayout;
