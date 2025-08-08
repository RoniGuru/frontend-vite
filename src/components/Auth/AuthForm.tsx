import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthForm = () => {
  const [login, setLogin] = useState<boolean>(true);
  return (
    <div className="bg-white w-1/3 h-2/3  rounded-md p-6">
      {login ? <LoginForm /> : <RegisterForm />}

      <button
        className="mt-4 mb-10 w-full bg-blue-500 py-4  rounded-md font-medium hover:bg-blue-700 duration-300 ease-out text-white text-2xl"
        onClick={() => setLogin(!login)}
      >
        {login ? 'switch to register' : 'switch to login'}
      </button>
    </div>
  );
};
export default AuthForm;
