import AuthForm from '../components/Auth/AuthForm';
import Title from '../components/UI/Title';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import type { RootState } from '../state/store';

const Auth = () => {
  const user = useSelector((state: RootState) => state.user.user);

  // If user is authenticated, redirect to home page
  if (user && user.id && user.id !== 0) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className=" h-screen w-screen items-center justify-center flex   ">
      <div className="flex justify-between items-center flex-col h-3/4 w-full">
        <Title />
        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;
