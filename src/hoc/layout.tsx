import LoadingScreen from '../components/UI/LoadingScreen';
import NavBar from '../components/UI/Nav/NavBar';
import { useSelector } from 'react-redux';
import type { RootState } from '../state/store';
import { useAuth } from '../Context/Auth/useAuth';
import { Toaster } from 'react-hot-toast';

const RootLayout = ({
  children,
  hideNav,
}: {
  children: React.ReactNode;
  hideNav?: boolean;
}) => {
  const { isLoading } = useAuth();
  const stateLoading = useSelector(
    (state: RootState) => state.user.loading || false
  );

  return (
    <div className="h-screen w-screen bg-gray-900">
      {hideNav ? null : <NavBar />}
      <Toaster />
      {isLoading || stateLoading ? <LoadingScreen /> : null}

      {children}
    </div>
  );
};

export default RootLayout;
