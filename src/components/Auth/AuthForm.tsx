import { useState } from 'react';
import LoginForm from './LoginForm';

const AuthForm = () => {
  const [login, setLogin] = useState<boolean>(true);
  return (
    <div className="bg-white w-1/3  h-3/4 rounded-md p-6">
      {login ? <LoginForm /> : <div></div>}

      <button onClick={() => setLogin(!login)}>
        {login ? 'switch to register' : 'switch to login'}
      </button>
    </div>
  );
};
export default AuthForm;
