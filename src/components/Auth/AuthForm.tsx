import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthForm = () => {
  const [login, setLogin] = useState<boolean>(true);
  return (
    <div className="bg-white  h-[550px]  rounded-md p-6 w-[450px]">
      {login ? <LoginForm /> : <RegisterForm />}

      <button
        className="mt-4 mb-10 w-full bg-gray-600 py-4  hover:bg-slate-700 rounded-md font-medium  duration-300 ease-out text-white text-2xl"
        onClick={() => setLogin(!login)}
      >
        {login ? 'switch to register' : 'switch to login'}
      </button>
    </div>
  );
};
export default AuthForm;
