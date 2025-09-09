import { useSelector } from 'react-redux';
import type { RootState } from '../../state/store';
import { FaRegEdit } from 'react-icons/fa';

const UserProfile = ({
  setUpdate,
}: {
  setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <div className=" font-bold  h-[60%] w-[100%] flex flex-col p-6   ">
      <h1 className="justify-start text-slate-700 mb-2"> My Profile</h1>
      <div className="flex bg-white w-[100%]  flex-row rounded-xl  justify-between p-4 items-center shadow-lg">
        {/* Profile card */}
        <div className="text-start  p-4 ">
          <p>Username : {user.username}</p>
          <p>Date Created: {user.created_at.substring(0, 10)}</p>
        </div>

        <FaRegEdit
          onClick={() => setUpdate(true)}
          size={30}
          className="items-center align-middle cursor-pointer hover:scale-125 duration-100 ease-in"
        />
      </div>
    </div>
  );
};

export default UserProfile;
