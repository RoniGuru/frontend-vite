import { useSelector } from 'react-redux';
import type { RootState } from '../../state/store';

const UserProfile = ({
  setUpdate,
}: {
  setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <div className="text-4xl font-bold  h-[60%] w-[100%] text-center flex flex-col justify-between items-center p-6 ">
      <div>
        <h1 className="text-7xl">Profile</h1>
        <p className="text-center">{user.username}</p>
        <p className="text-center">{user.created_at.substring(0, 10)}</p>
      </div>
      <button
        className="  w-[40%] bg-gray-600  hover:bg-slate-700 py-4  rounded-md font-medium  duration-300 ease-out text-white"
        onClick={() => setUpdate(true)}
      >
        Edit User
      </button>
    </div>
  );
};

export default UserProfile;
