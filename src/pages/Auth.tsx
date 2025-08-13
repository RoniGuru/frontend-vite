import AuthForm from '../components/Auth/AuthForm';
import Title from '../components/UI/Title';

const Auth = () => {
  return (
    <div className="bg-gray-500 h-screen w-screen items-center justify-center flex   ">
      <div className="flex justify-between items-center flex-col h-3/4 w-full">
        <Title />
        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;
