import { useState } from 'react';
const UpdatePasswordForm = () => {
  const [password, setPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');
  function handlePasswordForm() {}
  return (
    <div className="h-[400px]  flex flex-col gap-2 font-bold ">
      <div>
        <label>Old Password</label>
        <input
          value={password}
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  mb-4 "
          placeholder="Enter your old password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>New Password</label>
        <input
          value={newPassword}
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  mb-4 "
          placeholder="Enter your new password"
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Confirm New Password</label>
        <input
          value={confirmNewPassword}
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  mb-4 "
          placeholder="Confirm new password"
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
      </div>
      <button
        className="  w-full bg-gray-600  hover:bg-slate-700 py-4  rounded-md font-medium  duration-300 ease-out text-white"
        onClick={handlePasswordForm}
      >
        Change Password
      </button>
    </div>
  );
};
export default UpdatePasswordForm;
