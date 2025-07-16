import { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const handleLogin = () => {
    console.log(username, password);
  };
  return (
    <div className="flex flex-col">
      <div className="space-y-2">
        <label className="text-gray-700  ">Username</label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label className="text-gray-700  ">Password</label>
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
          placeholder="Enter your username"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className="mt-10 mb-10 w-full bg-blue-500 py-2  rounded-md font-medium hover:bg-blue-700 duration-300 ease-out text-white"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default LoginForm;
