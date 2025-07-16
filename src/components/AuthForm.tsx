import { useState } from 'react';

const AuthForm = () => {
  const [login, setLogin] = useState<boolean>(true);
  return (
    <form>
      {login ? <div></div> : <div></div>}

      <button onClick={() => setLogin(!login)}>
        {login ? 'login' : 'register'}
      </button>
    </form>
  );
};
export default AuthForm;
