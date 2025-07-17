import { useState } from 'react';
import { api } from '../../api/api';

const RegisterForm = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleRegister = async () => {
    if (password != confirmPassword) {
      alert('passwords do not match');
    }

    try {
      const response = await api.post('/register', {
        name: username,
        password,
      });

      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-1 h-3/4  justify-between">
      <div className=" h-3/4 ">
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
        <label className="text-gray-700  ">Confirm Password</label>
        <input
          value={confirmPassword}
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
          placeholder="Confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button
        className=" w-full bg-blue-500 py-2  rounded-md font-medium hover:bg-blue-700 duration-300 ease-out text-white"
        onClick={handleRegister}
      >
        Register
      </button>
    </div>
  );
};

export default RegisterForm;
