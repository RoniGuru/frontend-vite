import { useState } from 'react';
const UpdateNameForm = () => {
  const [newUsername, setNewUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function handleNameForm() {}
  return (
    <div className="h-[400px]  flex flex-col gap-2 font-bold ">
      <div>
        <label>New Username</label>
        <input
          value={newUsername}
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  mb-4 "
          placeholder="Enter new username"
          onChange={(e) => setNewUsername(e.target.value)}
        />
      </div>
      <div>
        <label> Password</label>
        <input
          value={password}
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  mb-4 "
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        className="  w-full bg-gray-600  hover:bg-slate-700 py-4  rounded-md font-medium  duration-300 ease-out text-white"
        onClick={handleNameForm}
      >
        Change Username
      </button>
    </div>
  );
};
export default UpdateNameForm;
