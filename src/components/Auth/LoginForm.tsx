import { useState } from 'react';
import { api } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/useAuth';

const LoginForm = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { setUser } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await api.post('/login', { name: username, password });
      console.log('response ', response);
      if (response.status === 200) {
        setUser(response.data);
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-1 h-3/4  justify-between">
      <div className=" h-1/2   ">
        <label className="text-gray-700  ">Username</label>
        <input
          value={username}
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="text-gray-700  ">Password</label>
        <input
          value={password}
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        className="  w-full bg-blue-500 py-2  rounded-md font-medium hover:bg-blue-700 duration-300 ease-out text-white"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default LoginForm;
