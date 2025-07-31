import { useState } from 'react';
import { useAuth } from '../../Context/Auth/useAuth';

const RegisterForm = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const { register } = useAuth();

  const handleRegister = async () => {
    if (password != confirmPassword) {
      alert('passwords do not match');
      return;
    } else if (password.length < 7) {
      alert('password should be not be less then 7 characters');
      return;
    } else if (username.length < 7) {
      alert('username should be not be less then 7 characters');
      return;
    }

    const response = await register(username, password);

    if (response.success) {
      window.location.reload();
    } else {
      alert(response.error || 'registration error');
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
