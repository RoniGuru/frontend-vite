import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../state/store';
import { updateUser } from '../../state/user/userSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const UpdateNameForm = () => {
  const [newUsername, setNewUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();
  const userState = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  async function handleNameForm() {
    try {
      await dispatch(
        updateUser({
          update: { username: newUsername },
          password,
          id: userState.user.id,
        })
      ).unwrap();
      navigate('/');
    } catch (error) {
      const errorMessage =
        error && typeof error === 'object' && 'message' in error
          ? (error as { message: string }).message
          : 'Update failed';

      toast.error(errorMessage, {
        duration: 10000,
        style: {
          background: '#363636',
          color: '#fff',
        },
      });
    }
  }
  return (
    <div className="h-[80%]  flex flex-col gap-2 font-bold w-[100%] items-center  justify-between pb-4">
      {/* Inputs */}
      <div className="w-[60%] h-[60%]">
        <label>New Username</label>
        <input
          value={newUsername}
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  mb-4  "
          placeholder="Enter new username"
          onChange={(e) => setNewUsername(e.target.value)}
        />
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
        className="  w-[60%] bg-gray-600  hover:bg-slate-700 py-4  rounded-md font-medium  duration-300 ease-out text-white"
        onClick={handleNameForm}
      >
        Change Username
      </button>
    </div>
  );
};
export default UpdateNameForm;
