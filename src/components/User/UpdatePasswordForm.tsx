import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../state/store';
import { updateUser } from '../../state/user/userSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const UpdatePasswordForm = () => {
  const [password, setPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();
  const userState = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  async function handlePasswordForm() {
    if (newPassword.length < 7) {
      toast.error('password length should be not be less then 7 characters', {
        duration: 10000,
        style: {
          background: '#363636',
          color: '#fff',
        },
      });
    } else if (newPassword != confirmNewPassword) {
      toast.error('passwords should be same', {
        duration: 10000,
        style: {
          background: '#363636',
          color: '#fff',
        },
      });
    }

    await dispatch(
      updateUser({
        update: { new_password: newPassword },
        password,
        id: userState.user.id,
      })
    );

    if (userState.error == '') {
      navigate('/');
    } else {
      toast.error(userState.error || 'Update  failed', {
        duration: 10000,
        style: {
          background: '#363636',
          color: '#fff',
        },
      });
    }
  }
  return (
    <div className="h-[100%]   flex flex-col gap-2 font-bold   w-[100%] items-center  justify-between pb-4">
      {/* Inputs */}
      <div className="w-[60%] h-[60%]">
        <label>Old Password</label>
        <input
          value={password}
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  mb-4 "
          placeholder="Enter your old password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>New Password</label>
        <input
          value={newPassword}
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  mb-4 "
          placeholder="Enter your new password"
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <label>Confirm New Password</label>
        <input
          value={confirmNewPassword}
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  mb-4 "
          placeholder="Confirm new password"
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
      </div>

      <button
        className=" w-[60%] bg-gray-600  hover:bg-slate-700 py-4  rounded-md font-medium  duration-300 ease-out text-white"
        onClick={handlePasswordForm}
      >
        Change Password
      </button>
    </div>
  );
};
export default UpdatePasswordForm;
